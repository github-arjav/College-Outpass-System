import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    employee: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    hostel: {type: Array, required: true}
})

export default mongoose.model("Warden", studentSchema, 'Wardens')