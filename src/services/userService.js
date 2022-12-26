import User from "../models/user.model"

let getAllUsers = (userId)=> {
    return new Promise (async(resolve,reject)=> {
        try{
            let users = ''
            if(userId === 'All') {
                users = await User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            if(userId && userId!=='All') {
                users = await User.findOne({
                    attributes: {
                        exclude: ['password']
                    },
                    where: {id:userId}
                })
            }
            resolve(users)
        }catch(e){
            reject(e)
        }
    })
}
module.exports = {
    getAllUsers
}