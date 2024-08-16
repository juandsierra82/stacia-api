
module.exports = {
    Query: {
        users: ()=>{
            return [
                {
                    id: 'someid',
                    name: 'Juan',
                    email: 'baolwen@gmail.com'
                }
            ]
        },
        user:(parent, {id})=>{
            return {   
                id,
                name: 'Juan',
                email: 'baolwen@gmail.com'      
            }
        }
    }
}