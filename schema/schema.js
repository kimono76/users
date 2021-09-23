const graphql = require('graphql')

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
}= graphql

const UseType =new GraphQLObjectType({
    name:'User',
    fields:{
        id:{type:GraphQLString} ,
        firstName:{type:GraphQLString},
        age:{type:GraphQLInt}
    }
})