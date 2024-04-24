import express from 'express';

import { postAppliedOutpasses, sendOutpassDetails, showWardenPendingOutpasses, approveOutpasses, rejectOutpasses, showWardenPreviousOutpasses, sendPrevOutpassDetails, showPrevOutpasses } from '../controllers/outpassMovement.js';

const router = express.Router();

router.post('/post', postAppliedOutpasses)
router.post('/send-details', sendOutpassDetails)
router.post('/show-warden-pending', showWardenPendingOutpasses)
router.post('/approve', approveOutpasses)
router.post('/reject', rejectOutpasses)
router.post('/show-prev', showWardenPreviousOutpasses)
router.post('/send-prev-details', sendPrevOutpassDetails)
router.post('/show-prev-student', showPrevOutpasses)

export default router