import mongoose from 'mongoose';

const PendingOutpassSchema = mongoose.Schema({
    name: {type: String},
    enrollment: {type: String},
    room: {type: Number},
    duration: {type: Number},
    fromDate: {type: Date},
    toDate: {type: Date},
    hostel: {type: String},
    purpose: {type: String},
    address: {type: String},
    outpassId: {type: String}
})

export default mongoose.model("PendingOutpass", PendingOutpassSchema, 'PendingOutpasses')