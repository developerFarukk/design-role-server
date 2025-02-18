


import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";


const blogSchema = new Schema<TProject>(
    {
        title: {
            type: String,
            required: [true, "Title is required"]
        },
        descriptions: {
            type: String,
            required: [true, "Description is required"]
        },
        liveLink: {
            type: String,
            required: [true, "LiveLink is required"]
        },
        image: { type: String, required: false },
        githubClient: { type: String, required: false },
        githubServer: { type: String, required: false },
    },
    {
        timestamps: true,
        versionKey: false
    },
);




export const Blogs = model<TProject>('Project', blogSchema);