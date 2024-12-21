import QueryBuilder from "../../builder/QueryBuilder";
import { blogSearchableFields } from "./blog.constant";
import { Tblog } from "./blog.interface";
import { Blogs } from "./blog.model";

// Create Blog
const createBlogIntoDB = async (payload: Tblog) => {
    const blogUserData = await Blogs.create(payload);
    const result = await Blogs.getBlogData(blogUserData._id);
    return result;
};


// All Blog Data Get
// const getAllBlogFromDB = async () => {

//     const result = await Blogs.find().select('_id title content author').populate('author', 'name email');

//     return result;
// };

const getAllBlogFromDB = async (query: Record<string, unknown>) => {
    
    const blogQuery = new QueryBuilder(
        Blogs.find()
        .select('_id title content author').populate('author', 'name email'),
        query,
    )
        .search(blogSearchableFields)
        .sortBy()
        .filter()
        .fields();
        
    const result = await blogQuery.modelQuery;
    
    return result;
   
};

// Single Blog data get
const getSingleBlogFromDB = async (id: string) => {
    const result =
        await Blogs.findById(id).populate('author');
    return result;
};

// Update bloge Data
const updateBlogIntoDB = async (
    id: string,
    payload: Partial<Tblog>,
) => {
    const result = await Blogs.findOneAndUpdate(
        { _id: id },
        payload,
        {
            new: true,
        },
    ).select('_id title content author')
        .populate('author', 'name email');
    return result;
};

// Delete Blog
const deleteBlogFromDB = async (id: string) => {
    const result = Blogs.findByIdAndDelete(id)
    return result;
};



export const blogService = {
    createBlogIntoDB,
    getAllBlogFromDB,
    getSingleBlogFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB

};