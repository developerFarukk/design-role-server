import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { AdminServices } from "./admin.service";

// Blocked user
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

// User Unblocked Route
const userunBlocked = catchAsync(async (req, res) => {

    const userId = req.params.userId;
    
    await AdminServices.userunBlockWithAdminFromDB(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User unBlocked successfully',
        data: undefined,
    });
});


export const AdminControllers = {
    userBlocked,
    userunBlocked

};