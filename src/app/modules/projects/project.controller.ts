import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectService } from "./project.service";


// Create Project
const createProject = catchAsync(async (req, res) => {

    const result = await projectService.createProjectIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Project is created succesfully',
        data: result,
    });
});



export const ProjectControllers = {
    createProject

};