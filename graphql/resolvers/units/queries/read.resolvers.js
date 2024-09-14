const prisma = require('../../../prisma-client');

module.exports = {
  Query: {
    units: async (parent, args) => {
      const units = await prisma.unit.findMany(args);
      return units;
    },
    unit: async (parent, { id }) => {
      const unit = await prisma.unit.findUnique({
        where: { id },
      });
      return unit;
    },
  },
};
