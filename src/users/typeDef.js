const { gql } = require('apollo-server');

const typeDef = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        fullName: String
        email: String!
        createdAt: String
        createdAtFormatted: String
        updatedAt: String
        updatedAtFormatted: String
    }

    extend type Query {
        users(dateFormat: String): [User]
        user(id: ID!, dateFormat: String): User
    }

    input UserInput {
        id: ID
        firstName: String!
        lastName: String!
        email: String!
    }

    type Mutation {
        saveUser(input: UserInput!): User!
    }
`;

module.exports = {
    typeDef
};
