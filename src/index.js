const { ApolloServer, gql } = require('apollo-server');
const users = require('./users');

require('dotenv').config();

const typeDef = gql`
    type Query
`;

const server = new ApolloServer({
    typeDefs: [
        typeDef,
        users.typeDef
    ],
    resolvers: [
        users.resolvers
    ],
    dataSources: () => ({
        UsersAPI: new users.UsersAPI()
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
