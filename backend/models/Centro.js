import { Schema,model } from "mongoose";


const centroSchema = Schema({

    nombre:{
        type:String,
        required: [true,'name is required']

    },
    descripcion:{
        type:String,

        

    },      

    estado:{
        type:Boolean,
        default: true
        
    },
    ciudad:{
        type:String,
        required:true

    }
}
)

const Centro= model("Centro", centroSchema,"Centro")

export default Centro;