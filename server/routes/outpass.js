import express from 'express';

import { createOutpass } from '../controllers/outpass.js' 
import { getAllOutpasses } from '../controllers/outpass.js' 

const router = express.Router();

router.post('/submit', createOutpass)
router.post('/post', getAllOutpasses)

export default router