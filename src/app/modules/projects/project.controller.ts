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


// Get All Project data
// All Blog data
const getAllProject = catchAsync(async (req, res) => {

    const result = await projectService.getAllProjectFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project fetched successfully',
        data: result,
    });
});


// Update Project
const updateProject = catchAsync(async (req, res) => {

    const { project: projectData } = req.body;
    const { id } = req.params;


    const result = await projectService.updateProjectIntoDB(id, projectData, req.file);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project is updated succesfully',
        data: result,
    });
});


// Delete Project Data
const deleteProject = catchAsync(async (req, res) => {

    const id = req.params.id;

    await projectService.deleteProjectFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project deleted succesfully',
        data: undefined
    });
});



export const ProjectControllers = {
    createProject,
    getAllProject,
    updateProject,
    deleteProject

};