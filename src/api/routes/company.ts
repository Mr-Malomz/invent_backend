import express from 'express';
import { getAllCompany } from '../controllers/company.controller';

const router = express.Router();

//get all company
router.get('/all', getAllCompany);

router.post('/create');

export default router;
