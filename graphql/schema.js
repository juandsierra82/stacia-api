const typeDefs = require('./types/index.js');
const resolvers = require('./resolvers/index.js');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = executableSchema;
