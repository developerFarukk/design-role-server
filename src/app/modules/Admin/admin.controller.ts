import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { AdminServices } from "./admin.service";


const userBlocked = catchAsync(async (req, res) => {

    const userId = req.params.userId;
    
    await AdminServices.userBlockWithAdminFromDB(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User blocked successfully',
        data: undefined,
    });
});


export const AdminControllers = {
    userBlocked

};