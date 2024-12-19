
import { z } from "zod";


// Create blog validation
const createBlogValidation = z.object({
    body: z.object({
        title: z.string({
            required_error: 'Title is required',
        }),
        content: z.string({
            required_error: 'content is required',
        }),
        author: z.string({
            required_error: 'content is required',
        }),
    }),
});


export const BlogValidation = {
    createBlogValidation,
};