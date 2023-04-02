import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
// import database later
import Controller from './interface/controller.interface';
import * as dotenv from 'dotenv';

dotenv.config({path:__dirname+'/../.env'})

class App{
    public app:express.Application;

    constructor(controllers:Controller[]){
        this.app = express();

        this.initController(controllers);
        this.initMiddleware();
    }

    public listen(){
        this.app.listen(process.env.PORT, ()=> {
            console.log(`running in PORT ${process.env.PORT}`);
        })
    }

    private initMiddleware(){
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    }

    private initController(controllers:Controller[]){
        controllers.forEach((controller) => {
            this.app.use('/',controller.router);
        })
    }

    // private connectDataBase(){

    // }
}

export default App;

