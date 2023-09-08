import { Router } from 'express';
import { check } from "express-validator";

import validateDocuments from '../middlewares/validate.documents.js';
import validateJWT from '../middlewares/validate.jwt.js'
import isAdminRole from "../middlewares/validate.role.js"



import { isValidRole, emailExiste, userExistsById } from '../helpers/db.validators.js';

import { getCampers, postCampers, deleteCampers, putCampers  } from '../controllers/camper.controllers.js';




const router = Router();

router.get("/",getCampers);

router.post("/", [
    check('nombre', 'Nombre no es valido').not().isEmpty(),
    check('NroIdentificacion','Numero no es valido').isLength({min:10,max:10}),
    check('password', 'Password debe ser de minimo 8 letras').isLength({min :8}),
    check('email', 'El email no es valido').isEmail(),

    check('email').custom(emailExiste ),
    
    check('rol').custom(isValidRole),
    validateDocuments

], postCampers);


router.delete ("/:id", [
            validateJWT,
             isAdminRole,   
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom( userExistsById ),
        validateDocuments
    ], deleteCampers );


router.put("/:id",
[
    validateJWT,
    isAdminRole,
        check('id', 'No es un ObjectID ').isMongoId(),
        check('id').custom( userExistsById ),
        check('rol').custom(isValidRole),
       
        validateDocuments
    ], putCampers );





export default router;