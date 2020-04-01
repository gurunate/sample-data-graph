const { gql } = require('apollo-server');

const typeDef = gql`
    type Todo {
        userId: ID!
        id: ID!
        title: String!
        completed: Boolean!
    }

    extend type Query {
        todos: [Todo]
        todo(id: ID!): Todo
    }
`;

module.exports = {
    typeDef
};
