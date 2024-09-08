const prisma = require('../../../prisma-client');

module.exports = {
  Mutation: {
    upsertBuilding: async (parent, args, ctx, info) => {
      const { create, update, where } = args;
      const building = await prisma.building.upsert({
        create,
        update,
        where,
      });
      return building;
    },
  },
};
