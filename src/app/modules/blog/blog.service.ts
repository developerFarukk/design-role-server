

import { Tblog } from "./blog.interface";
import { Blogs } from "./blog.model";

// Create Blog
const createBlogIntoDB = async (payload: Tblog) => {

    const newPayload = { ...payload };

    const result = await Blogs.create(newPayload);

    return result;
};


const getAllBlogFromDB = async () => {

    // Execute the query
    const blog = Blogs.find() 
     

    return blog;
};


// Update bloge Data
const updateBlogIntoDB = async (id: string, payload: Partial<Tblog>) => {

    const result = await Blogs.findOneAndUpdate({ _id: id }, payload,
        {
            new: true,
        },
    )

    return result;
};

// Delete Blog
const deleteBlogFromDB = async (id: string) => {
    const blog = await Blogs.findById(id);

    // Check blog Exist
    if (!blog) {
        throw new Error('This blog not found !')
    }

    const result = Blogs.findByIdAndDelete(id)
    return result;
};

export const blogService = {
    createBlogIntoDB,
    getAllBlogFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB

};