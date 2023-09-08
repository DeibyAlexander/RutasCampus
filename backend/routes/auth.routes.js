import Router from "express";
import { check } from "express-validator";

import login from "../controllers/auth.controllers.js";
import validateDocuments from "../middlewares/validate.documents.js";

const router = Router();

router.post("/login", [
    check("email","Email es requerido").isEmail(),
    check("password","Password es requerido").not().isEmpty(),
    validateDocuments
],login)


export default router;

