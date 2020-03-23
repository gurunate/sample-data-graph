const UsersAPI = require('./UsersAPI');
const { resolvers } = require('./resolvers');
const { typeDef } = require('./typeDef');

module.exports = {
    UsersAPI,
    resolvers,
    typeDef
};
