import Ruta from "../models/Ruta.js";



const getRuta = async (req,res)=>{
    const { hasta=2, desde=0 } = req.query;
    const query = { estado: true };



    const [ total, rutas ] = await Promise.all([
        Ruta.countDocuments(query),
        Ruta.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
            .populate('centro',['nombre'])

            
            
    ]);

    res.json({
        total,
        rutas
    });
}

const postRuta= async (req,res)=>{

    const {nombre,centro} = req.body;
    const ruta = new Ruta({nombre,centro });



    await ruta.save();

    res.json({
        "message":"Enviado Correctamente",
        ruta
    })    
}
 

const deleteRuta = async (req,res)=>{
     
       const {id} = req.params;

    
       const ruta = await Ruta.findByIdAndUpdate( id, { estado: false } );
   
       res.json(ruta)      
}

const putRuta = async (req,res)=>{

    const { id } = req.params;

    const { _id, ...resto } = req.body;


   

    const rutas = await Ruta.findByIdAndUpdate( id, resto );

    res.json({
        msg:"Centro Actualizado",
        rutas : rutas
    });
      
}

export{
    getRuta,
    postRuta,
    putRuta,
    deleteRuta
};