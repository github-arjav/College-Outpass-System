import express from 'express';
import { sendStudentOtp, sendWardenOtp, verifyStudentOtp, verifyWardenOtp, changeStudentPass, changeWardenPass} from '../controllers/ForgotPassword.js';

const router = express.Router();

router.post('/send-student-otp', sendStudentOtp)
router.post('/send-warden-otp', sendWardenOtp)
router.post('/verify-student-otp', verifyStudentOtp)
router.post('/verify-warden-otp', verifyWardenOtp)
router.post('/change-student-pass', changeStudentPass)
router.post('/change-warden-pass', changeWardenPass)

export default router