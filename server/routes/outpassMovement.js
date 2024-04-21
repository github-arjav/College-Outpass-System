import express from 'express';

import { postAppliedOutpasses, sendOutpassDetails, showWardenPendingOutpasses } from '../controllers/outpassMovement.js';

const router = express.Router();

router.post('/post', postAppliedOutpasses)
router.post('/send-details', sendOutpassDetails)
router.post('/show-warden-pending', showWardenPendingOutpasses)

export default router