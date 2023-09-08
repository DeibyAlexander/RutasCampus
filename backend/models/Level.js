import { Schema,model } from "mongoose";


const levelSchema = Schema({

    nombre:{
        type:String,
        required: [true,'name is required']

    },
    ruta:{
        type: Schema.Types.ObjectId,
        ref: 'Ruta',

    },          
    duracion:{
        type: Schema.Types.ObjectId,
        required:true

    },      
    
    estado:{
        type:Boolean,
        default: true
        
    },

}
)

const Level= model("Level", levelSchema,"Level")

export default Level;