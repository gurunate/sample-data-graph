const resolvers = {
    Query: {
        users: async (_, options, { dataSources }) =>
            await dataSources.UsersAPI.getUsers(options),
        user: async (_, options, { dataSources }) =>
            await dataSources.UsersAPI.getUser(options)
    },
    Mutation: {
        updateUser: async (_, { data }, { dataSources }) =>
            await dataSources.UsersAPI.saveUsers(data)
    }
};

module.exports = {
    resolvers
};
