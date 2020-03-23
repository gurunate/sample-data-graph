const { gql } = require('apollo-server');

const typeDef = gql`
    type User {
        firstName: String!
        lastName: String!
        email: String!
    }

    extend type Query {
        users: [User]
    }

    type Mutation {
        updateUser(data: String!): User
    }
`;

module.exports = {
    typeDef
};
