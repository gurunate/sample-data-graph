const resolvers = {
    Query: {
        todos: async (_, options, { dataSources }) =>
            await dataSources.TodosAPI.getTodos(options),
        todo: async (_, options, { dataSources }) =>
            await dataSources.TodosAPI.getTodo(options)
    }
};

module.exports = {
    resolvers
};
