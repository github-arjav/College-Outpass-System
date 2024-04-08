import mongoose from 'mongoose';

const forgotPassOtp = mongoose.Schema({
    enrollment: {type: String},
    employee: {type: String},
    email: {type: String},
    otp: {type: Number}
})

export default mongoose.model("ForgotPassOTP", forgotPassOtp)