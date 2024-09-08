const prisma = require('../../../prisma-client');

module.exports = {
  Query: {
    buildings: async (parent, args) => {
      const query = args;
      const buildings = await prisma.building.findMany(args);
      return buildings;
    },
    user: async (parent, { id }) => {
      const building = await prisma.building.findUnique({
        where: { id },
      });
      return building;
    },
  },
};
