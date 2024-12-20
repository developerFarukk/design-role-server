

import { TUser } from "../user/user.interface"
import { User } from "../user/user.model"


// User Register function
const userRegister = async (payload: TUser) => {
    const result = await User.create(payload)
    return result
}



export const AuthService = {
    userRegister,
    // login,
}