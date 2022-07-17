const express = require( 'express' );
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';        
        // middlewares
        this.middlewares();
        // rutas
        this.routes();
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( `app listen on http://localhost:${this.port}/` );
        })
    }

    middlewares() {
        // public 
        this.app.use( express.static( 'public' ) );
        // cors
        this.app.use( cors() );
        // body serializer
        this.app.use( express.json() );
    }

    routes() {
        this.app.use( this.usersPath , require( '../routes/user' ) );
    }

}

module.exports = Server;