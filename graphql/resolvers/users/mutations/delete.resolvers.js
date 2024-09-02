const prisma = require('../../../prisma-client');

module.exports = {
  Mutation: {
    deleteUser: async (parent, args, ctx, info) => {
      const where = args;
      const user = await prisma.user.delete({
        where,
      });
      return user;
    },
  },
};
