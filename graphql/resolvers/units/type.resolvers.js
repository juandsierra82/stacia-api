const prisma = require('../../prisma-client');

module.exports = {
  Unit: {
    id: (unit, context, info) => unit.id,
    address: (unit, context, info) => unit.address,
    createdAt: (unit, context, info) => unit.createdAt,
    updatedAt: (unit, context, info) => unit.updatedAt,
    buildingPercentage: (unit, context, info) => unit.buildingPercentage,
    building: async (unit, context, info) => {
      const building = await prisma.building.findUnique({
        where: {
          id: unit.buildingId,
        },
      });
      return building;
    },
    owners: async (unit, context, info) => {
      const unitsWithOwners = await prisma.unit.findUnique({
        where: {
          id: unit.id,
        },
        include: {
          owners: true,
        },
      });
      return unitsWithOwners.owners;
    },
    fees: async (unit, context, info) => {
      const { fees } = await prisma.unit.findUnique({
        where: {
          id: unit.id,
        },
        include: {
          fees: true,
        },
      });
      return fees;
    },
  },
};
