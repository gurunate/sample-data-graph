const { gql } = require('apollo-server');

const typeDef = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        fullName: String
        email: String!
        description: String
        createdAt: String
        createdAtFormatted: String
        updatedAt: String
        updatedAtFormatted: String
        addresses: [Address]
    }

    extend type Query {
        users(dateFormat: String): [User]
        user(id: ID!, dateFormat: String): User
    }

    input SaveUserInput {
        id: ID
        firstName: String!
        lastName: String!
        email: String!
    }

    input DeteleUserInput {
        id: ID!
    }

    type Mutation {
        saveUser(input: SaveUserInput!): User!
        removeUser(input: DeteleUserInput!): String
        removeUsers(input: [DeteleUserInput!]): String
    }
`;

module.exports = {
    typeDef
};
