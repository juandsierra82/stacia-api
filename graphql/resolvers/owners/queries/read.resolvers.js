const prisma = require('../../../prisma-client');

module.exports = {
  Query: {
    owners: async (parent, args) => {
      const { unitId } = args;
      if (unitId) {
        const { owners } = await prisma.unit.findUnique({
          where: {
            id: unitId,
          },
          include: {
            owners: true,
          },
        });
        return owners;
      }
      const owners = await prisma.owner.findMany({
        where: args,
      });
      return owners;
    },
    owner: async (parent, args) => {
      const { id } = args;
      const owner = await prisma.owner.findUnique({ where: { id } });
      return owner;
    },
  },
};
