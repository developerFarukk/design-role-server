/* eslint-disable @typescript-eslint/no-explicit-any */

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

// Single Blog data get
// const getSingleBlogFromDB = async (id: string, payload: Partial<Tblog>) => {

//     const result = await Blogs.findById({ id },
//         payload,
//     ).select('_id title content author')
//         .populate('author', 'name email');
//     return result;
// };

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
        throw new Error('This blog is already deleted !')
    }

    const result = Blogs.findByIdAndDelete(id)
    return result;
};

export const blogService = {
    createBlogIntoDB,
    getAllBlogFromDB,
    // getSingleBlogFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB

};