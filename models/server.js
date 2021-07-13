const express = require('express');
const cors = require('cors');

const { dbConeccion } = require('../db/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = 8000;

        // Path de rutas
        this.usuariosPath = '/api';
        this.almacenPath = '/api/almacen';
        
        // Conectar Base de Datos (MONGODB)
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas del app
        this.route();
    }

    async conectarDB() {
        await dbConeccion();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );
        
        // Lectura y parseo de body
        this.app.use( express.json() );

        // Directorio Publico
        this.app.use( express.static('public') );
    }

    route() {
        this.app.use(this.usuariosPath, require('../routes/usuario'));
        this.app.use(this.almacenPath, require('../routes/almacen'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server;