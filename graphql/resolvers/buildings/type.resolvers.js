const prisma = require('../../prisma-client');

module.exports = {
  Building: {
    id: (building, context, info) => building.id,
    createdAt: (building, context, info) => building.createdAt,
    updatedAt: (building, context, info) => building.updatedAt,
    name: (building, context, info) => building.name,
    dateFounded: (building, context, info) => building.dateFounded,
    address1: (building, context, info) => building.address1,
    address2: (building, context, info) => building.address2,
    city: (building, context, info) => building.city,
    municipality: (building, context, info) => building.municipality,
    country: (building, context, info) => building.country,
    postalCode: (building, context, info) => building.postalCode,
    description: (building, context, info) => building.description,
    units: async (building, context, info) => {
      const units = await prisma.unit.findMany({
        where: {
          buildingId: building.id,
        },
      });
      return units;
    },
  },
};
