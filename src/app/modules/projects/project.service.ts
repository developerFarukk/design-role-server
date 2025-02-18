/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TProject } from "./project.interface";
import { Project } from "./project.model";



// Create Project
const createProjectIntoDB = async (payload: TProject, file: any) => {

    if (file) {
        const imageName = `${payload?.title}`;
        const path = file?.path;

        //send image to cloudinary
        const { secure_url } = await sendImageToCloudinary(imageName, path);
        payload.image = secure_url as string;
    }

    const newproject = await Project.create([payload]);

    // const newStudent = await Student.create([payload], { session });

    const result = await Project.create(newproject);

    return result;
};


// Get all Project
const getAllProjectFromDB = async () => {

    const blog = Project.find()

    return blog;
};


// Update Project
const updateProjectIntoDB = async (id: string, payload: Partial<TProject>, file: any) => {


    if (file) {
        const imageName = `${file.filename}`;
        const path = file?.path;

        //send image to cloudinary
        const { secure_url } = await sendImageToCloudinary(imageName, path);
        payload.image = secure_url as string;
    }

    const result = await Project.findOneAndUpdate({ _id: id }, payload,
        {
            new: true,
        },
    )

    return result;
};


export const projectService = {
    createProjectIntoDB,
    getAllProjectFromDB,
    updateProjectIntoDB,


};