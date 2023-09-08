
import Role from '../models/Role.js';

import Camper from '../models/Camper.js';
import Ruta from '../models/Ruta.js';
import Level from '../models/Level.js';




const isValidRole = async(rol= '')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}

 const emailExiste = async( email = '' ) => {
    const existeEmail = await Camper.findOne({email});
    if(existeEmail){
       
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
 }

 
 const userExistsById = async( id ) => {


    const userExists = await Camper.findById(id);
    if ( !userExists ) {
        throw new Error(`El id (usuario) no existe ${ id }`);
    }
}

const rutaExistsById = async( id ) => {


    const rutaExists = await Ruta.findById(id);
    if ( !rutaExists ) {
        throw new Error(`El id (ruta) no existe ${ id }`);
    }
}

const levelExistsById = async( id ) => {


    const levelExists = await Level.findById(id);
    if ( !levelExists ) {
        throw new Error(`El id (ruta) no existe ${ id }`);
    }
}



export{
    isValidRole,
    emailExiste,
    userExistsById,
    rutaExistsById,
    levelExistsById
}