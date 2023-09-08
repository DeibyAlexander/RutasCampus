import { Schema,model } from "mongoose";


const rutaSchema = Schema({

    nombre:{
        type:String,
        required: [true,'name is required']

    },
    centro:{
        type: Schema.Types.ObjectId,
        ref: 'Centro',

    },      

    estado:{
        type:Boolean,
        default: true
        
    },

}
)

const Ruta= model("Ruta", rutaSchema,"Ruta")

export default Ruta;