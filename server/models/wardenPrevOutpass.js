import mongoose from 'mongoose';

const wPrevOutpassSchema = mongoose.Schema({
    name: {type: String},
    enrollment: {type: String},
    room: {type: Number},
    duration: {type: Number},
    fromDate: {type: Date},
    toDate: {type: Date},
    hostel: {type: String},
    purpose: {type: String},
    address: {type: String}
})

export default mongoose.model("W-PrevOutpass", wPrevOutpassSchema, 'WardenPrevOutpasses')