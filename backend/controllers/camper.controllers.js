import Camper from "../models/Camper.js";
import bcryptjs from "bcryptjs";



const getCampers = async (req,res)=>{
    const { hasta=10, desde=0 } = req.query;
    const query = { estado: true };



    const [ total, campers ] = await Promise.all([
        Camper.countDocuments(query),
        Camper.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
            .populate('level',['nombre']) 
    ]);

    res.json({
        total,
        campers
    });
}

const postCampers = async (req,res)=>{



    const {nombre, email, password, rol,tipoIdentificacion,NroIdentificacion,level,levelState,promedio } = req.body;
    const camper = new Camper({nombre, email, password, rol,tipoIdentificacion,NroIdentificacion,level,levelState,promedio});

    //! Verificar si el Correo ya exite
    const existeEmail = await Camper.findOne({email});
    if (existeEmail) {
        return res.status(400).json({
            msg: "Email is already registrado"
        });
        
    } 



    //?ENCRIPTAR PASSWORD
    const salt = bcryptjs.genSaltSync();
    camper.password = bcryptjs.hashSync(password, salt);


    await camper.save();

    res.json({
        "message":"Enviado Correctamente",
        camper
    })            
}

const deleteCampers = async (req,res)=>{
     
       const {id} = req.params

    
       const camper = await Camper.findByIdAndUpdate( id, { estado: false } );
   
       res.json(camper)      
}

const putCampers = async (req,res)=>{

    const { id } = req.params;

    const { _id, password, ...resto } = req.body;

    if ( password ) {

        //? Encriptar la contraseña
        
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }
   

    const camper = await Camper.findByIdAndUpdate( id, resto );

    res.json({
        msg:"Usuario Actualizado",
        camper : camper
    });
      
}


export {
    getCampers,
    postCampers,
    deleteCampers,
    putCampers,
};