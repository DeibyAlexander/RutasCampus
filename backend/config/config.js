import mongoose from "mongoose";

const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB ONLINE');
    } catch (error) {
        console.log(error);
        throw new Error('DB cant Inicializes')
    }
}

export default dbConnection;