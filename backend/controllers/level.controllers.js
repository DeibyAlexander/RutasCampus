import Level from "../models/Level.js";



const getLevel = async (req,res)=>{
    const { hasta=5, desde=0 } = req.query;
    const query = { estado: true };



    const [ total, levels ] = await Promise.all([
        Level.countDocuments(query),
        Level.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
            .populate('ruta',['nombre'])

            
            
    ]);

    res.json({
        total,
        levels
    });
}

const postLevel= async (req,res)=>{

    const {nombre, ruta, duracion} = req.body;
    const level = new Level({nombre,ruta, duracion });



    await level.save();

    res.json({
        "message":"Enviado Correctamente",
        level
    })    
}
 

const deleteLevel= async (req,res)=>{
     
       const {id} = req.params;

    
       const level = await Level.findByIdAndUpdate( id, { estado: false } );
   
       res.json(level)      
}

const putLevel = async (req,res)=>{

    const { id } = req.params;

    const { _id, ...resto } = req.body;


   

    const levels = await Level.findByIdAndUpdate( id, resto );

    res.json({
        msg:"Centro Actualizado",
        levels : levels
    });
      
}

export{
    getLevel,
    postLevel,
    putLevel,
    deleteLevel
};