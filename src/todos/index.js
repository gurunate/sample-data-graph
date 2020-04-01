const TodosAPI = require('./TodosAPI');
const { resolvers } = require('./resolvers');
const { typeDef } = require('./typeDef');

module.exports = {
    TodosAPI,
    resolvers,
    typeDef
};
