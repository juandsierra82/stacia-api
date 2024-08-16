module.exports = {
    Mutation: {
        makeVendor: (parent, { name, mainContact})=>{
            return {
                id: 1,
                name,
                mainContact
            }
        }
    }
}