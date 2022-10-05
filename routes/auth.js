import express from 'express';
import { register, login, me } from '../controllers/authController.js';
import { check } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', check, me);

export default router;
