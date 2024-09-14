const prisma = require('../../../prisma-client');

module.exports = {
  Mutation: {
    updateUnit: async (parent, args, ctx, info) => {
      const { data, where } = args;
      const unit = await prisma.unit.update({
        where,
        data,
      });
      return unit;
    },
  },
};
