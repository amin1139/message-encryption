import express from 'express';

const router = express.Router();

import { encryptMessage } from '../controllers/encryptController.js';
router.post('/', encryptMessage);

export default router;