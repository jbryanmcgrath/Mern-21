const { gql } = require('apollo-server-express');

const typeDefs = gql`
scalar Date
    type Book {
        _id:ID
        authors:[Authors]
        description:String!
        bookId:String!
        image:String!
        link:String!
        title:Gym
    }

    type User {
        _id:ID
        username:String!
        email:String!
        password:String!
        savedBooks:[Book]
    }


    type Query {
        book:book,
        user(email:String!):user
    }
`