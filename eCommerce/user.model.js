import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "enter a username"]
    },
    password: {
        type: String,
        required: [true, "enter a unique password"],
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }
})

export const User = mongoose.model("User", UserSchema) //("of what make", using what)