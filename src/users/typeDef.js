const { gql } = require('apollo-server');

const typeDef = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        fullName: String!
        email: String!
        createdAt: String
        createdAtFormatted: String
        updatedAt: String
        updatedAtFormatted: String
    }

    extend type Query {
        users(dateFormat: String): [User]
    }

    type Mutation {
        updateUser(data: String!): User
    }
`;

module.exports = {
    typeDef
};
