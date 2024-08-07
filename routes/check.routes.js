import { Router } from "express";
import {
    checkUser,
    listCheck
} from "../controllers/check.controllers.js";

const router = Router();

router.post('/checkin', checkUser);
router.get('/list', listCheck);

export default router;