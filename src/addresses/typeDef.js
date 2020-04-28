const { gql } = require('apollo-server');

const typeDef = gql`
    type Address {
        id: ID!
        UserId: ID!
        name: String!
        address: String!
        city: String
        state: String!
        zip: String
        createdAt: String
        createdAtFormatted: String
        updatedAt: String
        updatedAtFormatted: String
    }

    extend type Query {
        addresses(dateFormat: String): [Address]
        address(id: ID!, dateFormat: String): Address
    }

    input SaveAddressInput {
        id: ID
        name: String!
        address: String!
        city: String!
        state: String!
        zip: String!
    }

    input DeteleAddressInput {
        id: ID!
    }

    extend type Mutation {
        saveAddress(input: SaveAddressInput!): Address!
        removeAddress(input: DeteleAddressInput!): String
        removeAddresses(input: [DeteleAddressInput!]): String
    }
`;

module.exports = {
    typeDef
};
