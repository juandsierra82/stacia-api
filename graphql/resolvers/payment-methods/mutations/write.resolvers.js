const prisma = require('../../../prisma-client');

module.exports = {
  Mutation: {
    createPaymentMethod: async (parent, args, ctx, info) => {
      const { data } = args;
      const paymentMethod = await prisma.paymentMethod.create({
        data,
      });
      return paymentMethod;
    },
  },
};
