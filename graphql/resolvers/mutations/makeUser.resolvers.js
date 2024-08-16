module.exports = {
    Mutation: {
        makeUser: (parent, {name, email}, ctx, info)=>{
            return {
                id: 'someid',
                name,
                email
            }
        }
    }
};