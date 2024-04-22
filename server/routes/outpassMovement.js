import express from 'express';

import { postAppliedOutpasses, sendOutpassDetails, showWardenPendingOutpasses, moveOutpasses } from '../controllers/outpassMovement.js';

const router = express.Router();

router.post('/post', postAppliedOutpasses)
router.post('/send-details', sendOutpassDetails)
router.post('/show-warden-pending', showWardenPendingOutpasses)
router.post('/move', moveOutpasses)

export default router