import dotenv from "dotenv";
import Servidor from "./models/Server.js";


dotenv.config();
const server = new Servidor();

server.listen();