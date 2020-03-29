const resolvers = {
    Query: {
        users: async (_, options, { dataSources }) =>
            await dataSources.UsersAPI.getUsers(options),
        user: async (_, options, { dataSources }) =>
            await dataSources.UsersAPI.getUser(options)
    },
    Mutation: {
        saveUser: async (_, data, { dataSources }) => {
            if (data.id) {
                return await dataSources.UsersAPI.updateUsser(data);
            } else {
                return await dataSources.UsersAPI.createUser(data);
            }
        }
    }
};

module.exports = {
    resolvers
};
