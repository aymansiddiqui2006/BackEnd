import mongoose from "mongoose";


const HospitalSchema = new mongoose.Schema({
    Address: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    specializedIn: [{
        type: String,
        required: true,
    }]
}, { timestamps: true })

export const Hospital = mongoose.model("Hospital", HospitalSchema)