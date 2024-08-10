import { Router } from "express";
import {
    checkUser,
    listCheck,
    resetDatabase
} from "../controllers/check.controllers.js";

const router = Router();

router.post('/checkin', checkUser);
router.get('/list', listCheck);
router.post('/reset', resetDatabase);

export default router;