import {
  create,
  update,
  Delete,
  find,
  list,
} from '../controllers/noteController.js';
import express from 'express';
import { check } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', check, create);
router.put('/:id', check, update);
router.delete('/:id', check, Delete);

router.get('/:id', check, find);
router.get('/', check, list);

export default router;
