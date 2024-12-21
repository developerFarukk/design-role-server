
import config from "../config";
import { User } from "../modules/user/user.model";
import catchAsync from "../utils/catchAsync"
import jwt, { JwtPayload } from 'jsonwebtoken';


const auth = () => {
    return catchAsync(async (req, res, next) => {
        const token = req.headers.authorization;
        // console.log(token);

        // checking if the token is missing
        if (!token) {
            throw new Error('You are not authorized')
        }

        // checking if the given token is valid
        const decoded = jwt.verify(
            token,
            config.jwt_access_secret as string,
        ) as JwtPayload;

        // console.log({ decoded })
        const { role, email } = decoded;

        // checking if the user is exist
        // const user = await User.findOne({ email });

        // if (!user) {
        //     throw new Error('This user is not found !')
        // }

        // checking if the user is Blocked
        // const isBlocked = user?.isBlocked
        // console.log(isBlocked);
        
        // if (isBlocked) {
        //     throw new Error('This user is blocked ! !')
        // }


        next();
    })
}

export default auth;