import { Tblog } from "./blog.interface";
import { Blogs } from "./blog.model";

// Create Blog
const createBlogIntoDB = async (payload: Tblog) => {
    const result = await  Blogs.create(payload);
    return result;
};


// All Blog Data Get
const getAllBlogFromDB = async () => {
    
    const result = await Blogs.find().populate('author');
    
    return result;
};


export const blogService = {
    createBlogIntoDB,
    getAllBlogFromDB
    
};