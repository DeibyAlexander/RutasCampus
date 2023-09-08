import express from 'express';
import cors from "cors";
import dbConnection from '../config/config.js';

import routerCampers from '../routes/camper.routes.js';
import routerAuth from '../routes/auth.routes.js';
import routerCentro from '../routes/centro.routes.js';
import routerRuta from '../routes/ruta.routes.js';
import routerLevel from '../routes/level.routes.js';

class Servidor {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.camperpath = "/api/campers"
        this.authPath = "/api/auth"
        this.centroPath = "/api/centros"
        this.rutaPath = "/api/rutas"
        this.levelPath = "/api/levels"



   
        //! Conexion a la base de datos MONGODB
        this.ConectarDB();
        
        //! Middlewares
        this.middlewares();

        //! Routing
        this.routes();
    }

    async ConectarDB(){
        await dbConnection();

    }

    middlewares(){
        //! Cors
        this.app.use(cors());

        //? Public director
        this.app.use(express.static('public'))

        //! EXPRESS JSON
        this.app.use(express.json());

    }

    routes(){

        this.app.use(this.camperpath, routerCampers)
        this.app.use(this.authPath, routerAuth)
        this.app.use(this.centroPath, routerCentro)
        this.app.use(this.rutaPath, routerRuta)
        this.app.use(this.levelPath, routerLevel)

        
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Server corriendo en el puerto ${this.port}`);
        });
    };
}

export default Servidor;