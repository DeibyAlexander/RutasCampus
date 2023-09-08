import Centro from "../models/Centro.js";



const getCentro = async (req,res)=>{
    const { hasta=3, desde=0 } = req.query;
    const query = { estado: true };



    const [ total, centros ] = await Promise.all([
        Centro.countDocuments(query),
        Centro.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))

            
            
    ]);

    res.json({
        total,
        centros
    });
}

const postCentro = async (req,res)=>{

    const {nombre, descripcion, ciudad} = req.body;
    const centro = new Centro({nombre, descripcion, ciudad});



    await centro.save();

    res.json({
        "message":"Enviado Correctamente",
        centro
    })    
}
 

const deleteCentro = async (req,res)=>{
     
       const {id} = req.params

    
       const centro = await Centro.findByIdAndUpdate( id, { estado: false } );
   
       res.json(centro)      
}

const putCentro = async (req,res)=>{

    const { id } = req.params;

    const { _id,  ...resto } = req.body;


   

    const centro = await Centro.findByIdAndUpdate( id, resto );

    res.json({
        msg:"Centro Actualizado",
        centro : centro
    });
      
}

export{
    getCentro,
    postCentro,
    putCentro,
    deleteCentro
};