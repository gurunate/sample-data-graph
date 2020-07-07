const { gql } = require('apollo-server');

const typeDef = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        fullName: String
        email: String!
        createdAt: Date @formattableDate
        updatedAt: Date @formattableDate
    }

    scalar Date

    extend type Query {
        users(dateFormat: String): [User]
        user(id: ID!, dateFormat: String): User
        today: Date @formattableDate
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
