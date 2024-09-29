const prisma = require('../../prisma-client');

module.exports = {
  Payment: {
    id: (payment, context, info) => payment.id,
    transactionId: (payment, context, info) => payment.transactionId,
    amount: (payment, context, info) => payment.amount,
    feeId: (payment, context, info) => payment.feeId,
    notes: (payment, context, info) => payment.notes,
    payer: (payment, context, info) => payment.payer,
    paymentMethodId: (payment, context, info) => payment.methodId,
    fee: async (payment, context, info) => {
      const fee = await prisma.fee.findUnique({ id: payment.id });
      return fee;
    },
  },
};
