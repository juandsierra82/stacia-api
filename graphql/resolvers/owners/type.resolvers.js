const prisma = require('../../prisma-client');

module.exports = {
  Owner: {
    id: (owner, context, info) => owner.id,
    createdAt: (owner, context, info) => owner.createdAt,
    updatedAt: (owner, context, info) => owner.updatedAt,
    name: (owner, context, info) => owner.name,
    email: (owner, context, info) => owner.email,
    building: async (owner, context, info) => {
      const { building } = await prisma.owner.findUnique({
        where: {
          id: owner.id,
        },
        include: {
          building: true,
        },
      });
      return building;
    },
  },
};
