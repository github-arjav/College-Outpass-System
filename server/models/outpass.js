import mongoose from 'mongoose';

const outpassSchema = mongoose.Schema({
    name: {type: String, required: true},
    enrollment: {type: String, required: true},
    room: {type: Number, required:true},
    duration: {type: Number, required: true},
    fromDate: {type: Date, required: true},
    toDate: {type: Date, required: true},
    hostel: {type: String, required: true},
    purpose: {type: String, required: true},
    address: {type: String, required: true},
    outpassId: {type: String}
})

export default mongoose.model("Outpass", outpassSchema, 'Outpasses')