const resolvers = {
    Query: {
        addresses: async (_, options, { dataSources }) => {
            return await dataSources.AddressesAPI.getAddresses(options);
        },
        address: async (_, options, { dataSources }) =>
            await dataSources.AddressesAPI.getAddress(options)
    },
    Mutation: {
        saveAddress: async (_, { input }, { dataSources }) => {
            if (input.id) {
                return await dataSources.AddressesAPI.updateAddress(input);
            } else {
                return await dataSources.AddressesAPI.createAddress(input);
            }
        },
        removeAddress: async (_, { input }, { dataSources }) =>
            await dataSources.AddressesAPI.deleteAddress(input),
        removeAddresses: (_, { input }, { dataSources }) => {
            input.forEach(async address => {
                await dataSources.AddressesAPI.deleteAddress(address);
            });
        }
    }
};

module.exports = {
    resolvers
};
