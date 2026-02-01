import mongoose from "mongoose";


const MedicineSchema = new mongoose.Schema({
    PatientName: {
        type: String,
        required: true,
        unique: true,
    },
    diagonosed: {
        type: String,
        required: true,
    },
    patientAdd: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    BloodGrp: {
        type: String,
        required: true,
        enum: ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]
    },
    Gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },
    admittedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    }
}, { timestamps: true })

export const Medicine = mongoose.model("Medicine", MedicineSchema)