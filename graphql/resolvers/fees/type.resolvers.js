const prisma = require('../../prisma-client');

module.exports = {
  Fee: {
    id: (fee, context, info) => fee.id,
    createdAt: (fee, context, info) => fee.createdAt,
    updatedAt: (fee, context, info) => fee.updatedAt,
    payedAt: (fee, context, info) => fee.payedAt,
    notes: (fee, context, info) => fee.notes,
    type: (fee, context, info) => fee.type,
    amount: (fee, context, info) => fee.amount,
    name: (fee, context, info) => fee.name,
    unit: async (fee, context, info) => {
      const { unit } = await prisma.fee.findUnique({
        where: {
          id: fee.id,
        },
        include: {
          unit: true,
        },
      });
      return unit;
    },
  },
};
