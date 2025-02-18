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


// Update Project
const updateProject = catchAsync(async (req, res) => {

    const { project: projectData } = req.body;
    const { id } = req.params;
    

    const result = await projectService.updateProjectIntoDB( id, projectData, req.file );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project is updated succesfully',
        data: result,
    });
});



export const ProjectControllers = {
    createProject,
    updateProject

};