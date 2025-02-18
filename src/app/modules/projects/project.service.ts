import { TProject } from "./project.interface";
import { Project } from "./project.model";

// Create Project
const createProjectIntoDB = async (payload: TProject) => {

    const newPayload = { ...payload };

    const result = await Project.create(newPayload);

    return result;
};


export const projectService = {
    createProjectIntoDB,

};