import { Router } from 'express';
import { check } from "express-validator";

import validateDocuments from '../middlewares/validate.documents.js';
import validateJWT from '../middlewares/validate.jwt.js'
import isAdminRole from '../middlewares/validate.role.js';

import {  levelExistsById } from '../helpers/db.validators.js';



import { getLevel, postLevel, deleteLevel, putLevel  } from '../controllers/level.controllers.js';
import { putRuta } from '../controllers/ruta.controllers.js';




const router = Router();

router.get("/",getLevel);

router.post("/", [
    validateJWT,
    check('nombre', 'Nombre no es valido').not().isEmpty(),
    validateDocuments

], postLevel);


router.delete ("/:id", [
            validateJWT,
            isAdminRole,
            check('id', 'No es un ID válido').isMongoId(),
            check('id').custom( levelExistsById ),
        validateDocuments
    ], deleteLevel );


router.put("/:id",
[
    validateJWT,      
    isAdminRole,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( levelExistsById ),
        validateDocuments
    ], putRuta );





export default router;