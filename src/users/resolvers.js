const resolvers = {
    Query: {
        users: async (_, options, { dataSources }) =>
            await dataSources.UsersAPI.getUsers(options),
        user: async (_, options, { dataSources }) =>
            await dataSources.UsersAPI.getUser(options)
    },
    Mutation: {
        saveUser: async (_, { input }, { dataSources }) => {
            if (input.id) {
                return await dataSources.UsersAPI.updateUser(input);
            } else {
                return await dataSources.UsersAPI.createUser(input);
            }
        },
        removeUser: async (_, { input }, { dataSources }) =>
            await dataSources.UsersAPI.deleteUser(input),
        removeUsers: (_, { input }, { dataSources }) => {
            input.forEach(async user => {
                await dataSources.UsersAPI.deleteUser(user);
            });
        }
    }
};

module.exports = {
    resolvers
};
