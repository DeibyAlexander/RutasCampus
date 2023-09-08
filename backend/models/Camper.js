import { Schema,model } from "mongoose";


const camperSchema = Schema({

    nombre:{
        type:String,
        required: [true,'name is required']

    },
    email:{
        type:String,
        required: [true,'email is required'],
        unique:true
        

    },      
    password:{
        type:String,
        required: [true,'password is required']
        

    },       
  
 
    tipoIdentificacion:{
        type:String,
        required: [true,'tipoIdentificaion is required'],
        enum:['T.I', 'C.C']

    },
    NroIdentificacion:{
        type:String,
        required: [true,'NroIdentificacion is required'],
        unique:true
        

    },
    level:{
        type:String,
        required: [true,'level is required']
        

    },        
    levelState:{
        type: Schema.Types.ObjectId,
        ref: 'Level'
    },
    estado:{
        type:Boolean,
        default: true
        
    },
    imagen:{
        type:String

    },
    rol:{
        type:String,
        required:true,
        default:"USER"
    },
    promedio:{
        type:String

    },
}
)

const Camper= model("Camper", camperSchema,"Camper")

export default Camper;