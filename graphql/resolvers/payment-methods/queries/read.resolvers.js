const prisma = require('../../../prisma-client');

module.exports = {
  Query: {
    paymentMethods: async (parent, args) => {
      const { ids } = args;
      if (ids.length) {
        const paymentMethods = await prisma.paymentMethod.findMany({
          where: {
            id: ids,
          },
        });
        return paymentMethods;
      }
      return [];
    },
    paymentMethod: async (parent, args) => {
      const { id } = args;
      const paymentMethod = await prisma.paymentMethod.findUnique({
        where: { id },
      });
      return paymentMethod;
    },
  },
};
