import mongoose from "mongoose";
import { Todo } from "./todo.models";

const SubTodoSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps:true})

export const Sub=mongoose.model("Sub",SubTodoSchema)