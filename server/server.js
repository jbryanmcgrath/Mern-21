const express = require('express')
//import ApolloServer
const { ApolloServer } = require('apollo-server-express')
const { authMiddleware } = require('../server/utils/auth');

//import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();


const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });
  //start the Apollo Server
  await server.start()

  //integrate Apollo server with express as middleware
  server.applyMiddleware({ app });

  //log where we can go to test our QGL API
  console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`)
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});