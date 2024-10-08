const express = require('express');
const cors = require('cors');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./graphql/schema.js');
const { ruruHTML } = require('ruru/server');

const app = express();
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  accessControlAllowOrigin: '*',
  accessControlAllowCredentials: true,
};
app.use(cors(corsOptions));
// Create and use the GraphQL handler.
app.all(
  '/graphql',
  createHandler({
    schema,
  })
);

// Serve the GraphiQL IDE.
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});
// Start the server at port
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
