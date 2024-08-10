const express=require("express")
const mongoose=require("mongoose")
const dotEnv=require("dotenv")
const { ApolloServer } = require("apollo-server-express")

dotEnv.config()
const typeDefs=require('./graphql/typedefs')
const resolvers=require('./graphql/resolvers')


mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to mongoDB")
})

const startServer=async()=>{
    const server=new ApolloServer({
        typeDefs:[typeDefs],
        resolvers:[resolvers]
    })
    await server.start()
    const app=express()
    server.applyMiddleware({app})
    const PORT= process.env.PORT || 4001
    app.listen(PORT,()=>{
        console.log('server is running on PORT'+PORT)
    })
}
startServer()





