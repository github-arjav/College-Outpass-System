import mongoose from 'mongoose';

const sPrevOutpassSchema = mongoose.Schema({
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

export default mongoose.model("S-PrevOutpass", sPrevOutpassSchema, 'StudentPrevOutpasses')