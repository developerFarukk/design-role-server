

import { TUser } from "../user/user.interface"
import { User } from "../user/user.model"


// User Register function
const userRegisterDB = async (payload: TUser) => {
    const publicUserData = await User.create(payload);
    const result = await User.getPublicUserData(publicUserData._id);

    return result
}



export const AuthService = {
    userRegisterDB,
    
    // login,
}