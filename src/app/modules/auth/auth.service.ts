

import { TUser } from "../user/user.interface"
import { User } from "../user/user.model"


// User Register function
const userRegisterDB = async (payload: TUser) => {
    const publicUserData = await User.create(payload);
    const result = await User.getPublicUserData(publicUserData._id);

    return result
}

// Login user
const loginUserWithDB = async (payload: { email: string; password: string }) => {

    // checking if the user is exist
    const user = await User.findOne({ email: payload?.email }).select('+password');
  
    if (!user) {
      throw new Error('This user is not found !')
    }
  
    // checking if the user is inactive
    // const userStatus = user?.userStatus
  
    // if (userStatus === 'inactive') {
    //   throw new Error('This user is blocked ! !')
    // }
  
    //checking if the password is correct
    // const isPasswordMatched = await bcrypt.compare(
    //   payload?.password,
    //   user?.password
    // )
  
    // if (!isPasswordMatched) {
    //   throw new Error('Wrong Password!!! Tell me who are you? 😈')
    // }
  
    //create token and sent to the  client
    // const jwtPayload = {
    //   email: user?.email,
    //   role: user?.role,
    // }
  
    // const token = jwt.sign(jwtPayload, "secret", { expiresIn: '1d' });
  
    // return {token, user};
    return { user};
  }

export const AuthService = {
    userRegisterDB,
    loginUserWithDB
}