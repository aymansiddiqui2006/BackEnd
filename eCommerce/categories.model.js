import mongoose, { mongo } from "mongoose";

const categoriesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

    }
    , { timestamps: true })

export const Category = mongoose.model("Category", categoriesSchema)

//in mongoose whatever name we have written to export it becomes prural and in lowercase
//e.g. Category= categories 