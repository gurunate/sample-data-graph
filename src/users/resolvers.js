const resolvers = {
    Query: {
        users: async (_, __, { dataSources }) =>
            await dataSources.UsersAPI.getUsers()
    },
    Mutation: {
        updateUser: async (_, { data }, { dataSources }) =>
            await dataSources.UsersAPI.saveUsers(data)
    }
};

module.exports = {
    resolvers
};