const prisma = require('../../../prisma-client');

module.exports = {
  Mutation: {
    createPayment: async (parent, args, ctx, info) => {
      const { data } = args;
      const payment = await prisma.payment.create({
        data,
      });
      return payment;
    },
  },
};
