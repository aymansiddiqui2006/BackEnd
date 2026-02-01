import mongoose from "mongoose";
import { Hospital } from "./hospital";
const Hours = new mongoose.Schema({
    hours: [{
        time:
        {
            type: Number,
            required: true,
        }
    }]

})

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        default: 0,
        required: true,
    },
    WorksInHospitals: [{
        Hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true,
        },
        hour: {
            type: "Hours"
        }
    }]


}, { timestamps: true })

export const Doctor = mongoose.model("Doctor", DoctorSchema)