import { Schema, mongoose } from "mongoose";


const RoleSchema = Schema(
{
    rol:{
        type:String,
        required : [true,'Rol es obligatorio']

    }
})

const Role = mongoose.model('Role', RoleSchema,'Role')

export default Role;