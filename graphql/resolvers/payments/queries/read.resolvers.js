const prisma = require('../../../prisma-client');

module.exports = {
  Query: {
    payments: async (parent, args) => {
      const { ids } = args;
      if (ids.length) {
        const payment = await prisma.payment.findMany({
          where: {
            id: ids,
          },
        });
        return payment;
      }
      return [];
    },
    payment: async (parent, args) => {
      const { id } = args;
      const payment = await prisma.payment.findUnique({
        where: { id },
      });
      return payment;
    },
  },
};
