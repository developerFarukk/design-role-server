
import { User } from "../user/user.model";

const userBlockWithAdminFromDB = async (userId: string) => {
    const result = await User.findOneAndUpdate(
        { _id: userId },
        { isBlocked: true },
        {
            new: true,
        },
    )
    //    console.log(result);
       
    return result;
};



export const AdminServices = {
    userBlockWithAdminFromDB

};