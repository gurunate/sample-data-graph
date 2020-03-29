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

    input CreateUserInput {
        id: ID
        firstName: String!
        lastName: String!
        email: String!
    }

    input DeteleUserInput {
        id: ID!
    }

    type Mutation {
        saveUser(input: CreateUserInput!): User!
        removeUser(input: DeteleUserInput!): String
    }
`;

module.exports = {
    typeDef
};
