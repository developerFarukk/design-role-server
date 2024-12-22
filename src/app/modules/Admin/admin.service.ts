
import { User } from "../user/user.model";

const userBlockWithAdminFromDB = async (userId: string) => {

    const user = await User.findById(userId);

    // Check User Find 
    if (!user) {
        throw new Error('This user is not found !')
    }

    // Check User Already Blocked
    if (user.isBlocked) {
        throw new Error('User is already blocked!')
    }

    // Check User Admin
    if (user.role === 'admin') {
        throw new Error('This user is an admin and cannot be blocked')
    }


    const result = await User.findOneAndUpdate(
        { _id: userId },
        { isBlocked: true },
        {
            new: true,
        },
    )
    return result;
};



export const AdminServices = {
    userBlockWithAdminFromDB

};