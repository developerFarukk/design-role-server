import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogService } from "./blog.service";
import httpStatus from 'http-status';


// Create Blogs
const createblogs = catchAsync(async (req, res) => {
    const result =
        await blogService.createBlogIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog is created succesfully',
        data: result,
    });
});


export const BlogsControllers = {
    createblogs,
    
};