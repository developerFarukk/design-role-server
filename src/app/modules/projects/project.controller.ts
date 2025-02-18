import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectService } from "./project.service";
import httpStatus from 'http-status';


// Create Project
const createProject = catchAsync(async (req, res) => {

    const { project: projectData } = req.body;

    const result = await projectService.createProjectIntoDB(projectData, req.file);

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