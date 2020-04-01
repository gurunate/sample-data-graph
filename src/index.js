const { ApolloServer, gql } = require('apollo-server');
const users = require('./users');
const todos = require('./todos');

require('dotenv').config();

const typeDef = gql`
    type Query
`;

const server = new ApolloServer({
    typeDefs: [
        typeDef,
        users.typeDef,
        todos.typeDef,
    ],
    resolvers: [
        users.resolvers,
        todos.resolvers
    ],
    dataSources: () => ({
        UsersAPI: new users.UsersAPI(),
        TodosAPI: new todos.TodosAPI(),
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
