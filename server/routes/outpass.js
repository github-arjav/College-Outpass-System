import express from 'express';

import { createOutpass } from '../controllers/outpass.js'

const router = express.Router();

router.post('/submit', createOutpass)

export default router