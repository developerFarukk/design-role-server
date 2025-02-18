import { z } from "zod";



// Create Project validation
const createProjectValidation = z.object({
    body: z.object({
        project: z.object({
            title: z.string({
                required_error: 'Title is required',
            }),
            descriptions: z.string({
                required_error: 'Description is required',
            }),
            liveLink: z.string({
                required_error: 'LiveLink is required',
            }),
            githubClient: z.string().optional(),
            githubServer: z.string().optional(),
        })
    }),
});


export const ProjectValidation = {
    createProjectValidation,
};