const { gql } = require("apollo-server-express");

const typeDefs=gql`
type User {
    id:ID!
    name:String!
    age:Int
    email:String!
    address:String
}

type Query {

users:[User]
user(id:ID!):User
}

type Mutation {
    createUser(name:String,email:String,age:Int,address:String):User
    updateUser(id:ID!,name:String,email:String,age:Int,address:String):User
    deleteUser(id:ID!):User
}
`
module.exports=typeDefs