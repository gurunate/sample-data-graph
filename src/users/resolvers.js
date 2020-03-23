const resolvers = {
    Query: {
        users: async (_, { dateFormat }, { dataSources }) =>
            await dataSources.UsersAPI.getUsers(dateFormat)
    },
    Mutation: {
        updateUser: async (_, { data }, { dataSources }) =>
            await dataSources.UsersAPI.saveUsers(data)
    }
};

module.exports = {
    resolvers
};