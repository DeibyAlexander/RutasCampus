import { Router } from 'express';
import { check } from "express-validator";

import validateDocuments from '../middlewares/validate.documents.js';
import validateJWT from '../middlewares/validate.jwt.js'
import isAdminRole from '../middlewares/validate.role.js';

import { isValidRole, emailExiste, userExistsById, rutaExistsById } from '../helpers/db.validators.js';



import { getRuta, postRuta, deleteRuta, putRuta  } from '../controllers/ruta.controllers.js';




const router = Router();

router.get("/",getRuta);

router.post("/", [
    check('nombre', 'Nombre no es valido').not().isEmpty(),
    validateDocuments

], postRuta);


router.delete ("/:id", [
            validateJWT,
            isAdminRole,
            check('id', 'No es un ID válido').isMongoId(),
            check('id').custom( rutaExistsById ),
        validateDocuments
    ], deleteRuta );


router.put("/:id",
[
    validateJWT,      
    isAdminRole,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( rutaExistsById ),
        validateDocuments
    ], putRuta );





export default router;