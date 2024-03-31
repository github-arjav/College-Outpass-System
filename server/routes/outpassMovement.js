import express from 'express';

import { postAppliedOutpasses, showOutpassDetail } from '../controllers/outpassMovement.js';

const router = express.Router();

router.post('/post', postAppliedOutpasses)
router.post('/detail', showOutpassDetail)

export default router