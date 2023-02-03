export const Update_User = 'Update_User'

export function UpdateUser(newUser){
    return {
        type:Update_User,
        payload:{
            user:newUser
        }
    }
}