import express from 'express';

import { wardenLogin, wardenSignup, wardenVerification } from '../controllers/auth.js'

const router = express.Router();

router.post('/signup', wardenSignup)
router.post('/login', wardenLogin)
router.post('/verify', wardenVerification)

export default router