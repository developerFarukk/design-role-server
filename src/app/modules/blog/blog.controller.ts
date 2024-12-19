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

// All Blog data
const getAllBlog = catchAsync(async (req, res) => {

    const result = await blogService.getAllBlogFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All Blog Data get successfully',
        data: result,
    });
});

// Single Blog data get
const getSingleBlog = catchAsync(async (req, res) => {
    const { blogId: id } = req.params;
    const result =
        await blogService.getSingleBlogFromDB(
            id,
        );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: ' Single Blog data get succesfully',
        data: result,
    });
});


export const BlogsControllers = {
    createblogs,
    getAllBlog,
    getSingleBlog 

};