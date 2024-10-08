const prisma = require('../../../prisma-client');

module.exports = {
  Mutation: {
    createUser: async (parent, args, ctx, info) => {
      const data = args;
      const user = await prisma.user.create({
        data,
      });
      return user;
    },
  },
};
