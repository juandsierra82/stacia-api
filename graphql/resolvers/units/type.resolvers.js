module.exports = {
  Unit: {
    id: (unit, context, info) => unit.id,
    address: (unit, context, info) => unit.address,
    createdAt: (unit, context, info) => unit.createdAt,
    updatedAt: (unit, context, info) => unit.updatedAt,
    building: (unit, context, info) => unit.building,
  },
};
