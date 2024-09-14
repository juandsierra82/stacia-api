const prisma = require('../../prisma-client');

module.exports = {
  Event: {
    id: (event, context, info) => event.id,
    createdAt: (event, context, info) => event.createdAt,
    updatedAt: (event, context, info) => event.updatedAt,
    date: (event, context, info) => event.date,
    frequency: (event, context, info) => event.frequency,
    name: (event, context, info) => event.name,
    notes: (event, context, info) => event.notes,
    type: (event, context, info) => event.type,
    fees: async (event, context, info) => {
      const { fees } = await prisma.event.findUnique({
        where: {
          id: event.id,
        },
        include: {
          fees,
        },
      });
      return fees;
    },
  },
};
