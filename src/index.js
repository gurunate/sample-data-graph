const { ApolloServer, gql } = require('apollo-server');
const directives = require('./directives');

const users = require('./users');
const todos = require('./todos');

require('dotenv').config();

const PORT = 4001;

const typeDef = gql`
    type Query
`;

const server = new ApolloServer({
    context: ({ req }) => {
        // Note! This example uses the `req` object to access headers,
        // but the arguments received by `context` vary by integration.
        // This means they will vary for Express, Koa, Lambda, etc.!
        //
        // To find out the correct arguments for a specific integration,
        // see the `context` option in the API reference for `apollo-server`:
        // https://www.apollographql.com/docs/apollo-server/api/apollo-server/

        // Get the user token from the headers.

        // try to retrieve a user with the token
        // const user = getUser(token);

        const user = {};

        // add the user to the context
        return { user };
    },
    typeDefs: [typeDef, users.typeDef, todos.typeDef, directives.typeDef],
    resolvers: [users.resolvers, todos.resolvers],
    engine: {
        apiKey: 'service:sample-data-graph:z-uiWrAK2MJXG04jMeLAqA'
    },
    schemaDirectives: directives.directives,
    dataSources: () => ({
        UsersAPI: new users.dataSource(),
        TodosAPI: new todos.dataSource()
    })
});

// const app = express();
// // Additional middleware can be mounted at this point to run before Apollo.
// app.use('*', jwtCheck, requireAuth, checkScope);

// server.applyMiddleware({ app, path: '/specialUrl' });

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
