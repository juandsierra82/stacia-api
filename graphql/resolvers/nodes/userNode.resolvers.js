module.exports = {
  User: {
    id: (user, context, info) => user.id,
    name: (user, context, info) => user.name,
    email: (user, context, info) => user.email,
    admin: (user, context, info) => user.admin,
    createdAt: (user, context, info) => user.createdAt,
    updatedAt: (user, context, info) => user.updatedAt,
  },
};
