module.exports = {
  PaymentMethod: {
    id: (paymentMethod, context, info) => paymentMethod.id,
    isPrimary: (paymentMethod, context, info) => paymentMethod.isPrimary,
    methodType: (paymentMethod, context, info) => paymentMethod.methodType,
    details: (paymentMethod, context, info) => paymentMethod.details,
    name: (paymentMethod, context, info) => paymentMethod.name,
  },
};
