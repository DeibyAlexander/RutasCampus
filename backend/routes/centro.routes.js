import { Router } from 'express';
import { check } from "express-validator";

import validateDocuments from '../middlewares/validate.documents.js';
import validateJWT from '../middlewares/validate.jwt.js'




import { getCentro, postCentro, deleteCentro, putCentro  } from '../controllers/centro.controllers.js';




const router = Router();

router.get("/",getCentro);

router.post("/", [
     validateJWT,

    check('nombre', 'Nombre no es valido').not().isEmpty(),
    validateDocuments

], postCentro);


router.delete ("/:id", [
            validateJWT,
        validateDocuments
    ], deleteCentro );


router.put("/:id",
[
    validateJWT,      
        validateDocuments
    ], putCentro );





export default router;