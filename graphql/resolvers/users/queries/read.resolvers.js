const prisma = require('../../../prisma-client');

module.exports = {
  Query: {
    users: async (parent, args) => {
      const query = args;
      const users = await prisma.user.findMany(args);
      return users;
    },
    user: async (parent, { id }) => {
      const user = await prisma.user.findUnique({
        id,
      });
      return user;
    },
  },
};
