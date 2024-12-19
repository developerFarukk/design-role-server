import { Tblog } from "./blog.interface";
import { blogs } from "./blog.model";

// Create Blog
const createBlogIntoDB = async (payload: Tblog) => {
    const result = await  blogs.create(payload);
    return result;
};


export const blogService = {
    createBlogIntoDB,
    
};