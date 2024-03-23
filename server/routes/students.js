import express from 'express';

import { studentLogin, studentSignup, studentVerification } from '../controllers/auth.js'

const router = express.Router();

router.post('/signup', studentSignup)
router.post('/login', studentLogin)
router.post('/verify', studentVerification)

export default router