import express from "express";
import controller from '../controllers/book.js';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.delete('/soft/:id', controller.softDelete);

export default router;
