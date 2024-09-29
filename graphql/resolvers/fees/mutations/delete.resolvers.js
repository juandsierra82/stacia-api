const prisma = require('../../../prisma-client');

module.exports = {
  Mutation: {
    deleteFee: async (parent, args, ctx, info) => {
      const { where } = args;
      const fee = await prisma.fee.delete({
        where,
      });
      return fee;
    },
  },
};
