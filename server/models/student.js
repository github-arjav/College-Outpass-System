import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    enrollment: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    hostel: {type: String, required: true}
})

export default mongoose.model("Student", studentSchema, 'Students')