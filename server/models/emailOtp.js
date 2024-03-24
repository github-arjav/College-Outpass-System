import mongoose from 'mongoose';

const emailOtpSchema = mongoose.Schema({
    email: {type: String},
    otp: {type: Number}
})

export default mongoose.model("EmailOTP", emailOtpSchema, 'EmailOTPs')