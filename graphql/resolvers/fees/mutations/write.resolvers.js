const prisma = require('../../../prisma-client');

module.exports = {
  Mutation: {
    createFee: async (parent, args, ctx, info) => {
      const { data } = args;
      const fee = await prisma.fee.create({
        data,
      });
      return fee;
    },
    updateFee: async (parent, args, ctx, info) => {
      const { data, where } = args;
      const fee = await prisma.fee.update({
        where,
        data,
      });
      return fee;
    },
  },
};
