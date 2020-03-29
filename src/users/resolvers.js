const resolvers = {
    Query: {
        users: async (_, options, { dataSources }) =>
            await dataSources.UsersAPI.getUsers(options),
        user: async (_, options, { dataSources }) =>
            await dataSources.UsersAPI.getUser(options)
    },
    Mutation: {
        saveUser: async (_, { input }, { dataSources }) => {
            console.log({ input });
            if (input.id) {
                return await dataSources.UsersAPI.updateUser(input);
            } else {
                return await dataSources.UsersAPI.createUser(input);
            }
        }
    }
};

module.exports = {
    resolvers
};
