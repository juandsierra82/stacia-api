module.exports = {
  Mutation: {
    createVendor: (parent, { name, mainContact }) => {
      return {
        id: 1,
        name,
        mainContact,
      };
    },
  },
};
