module.exports = {
  Query: {
    vendors: () => {
      console.log('CALLING VENDORS RESOLVER');
      return [
        {
          id: 'someid',
          name: 'Allonso Roofing',
          mainContact: 'Blanka@allonso.com',
        },
      ];
    },
    vendor: (parent, { id }) => {
      return {
        id,
        name: 'Allonso Roofing',
        mainContact: 'Blanka@allonso.com',
      };
    },
  },
};
