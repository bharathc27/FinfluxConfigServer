import {AppRouter} from './controllers'
import express = require("express");
import path = require("path")
import { ErrorHandler } from './controllers/ErrorController';
import { Router } from 'express';

export class App {

    private serverIP: string;
    private port: any;
    private app: express.Application;
    private appRouter: AppRouter;
    private router: Router;

    constructor(serverIP: string, port: any) {
    
        this.serverIP = serverIP;
        this.port = port;    

        this.app = express();
        this.router = Router();
        this.appRouter = new AppRouter();

        this.init();
    }

    private init() : void {
        this.setRoutes();
    }

    private setRoutes() : void {

        //Map Routes
        this.app.use("/login", this.appRouter.getLoginController().getRouter());

        //Static routing
        //Static file rendering
        this.app.use("/static", express.static(path.join(__dirname, '../app/public')));
        this.app.use(express.static(path.join(__dirname, '../angular/dist/angular/')));
        console.log("angular path : " + path.join(__dirname, '../angular/dist/angular/index.html'));
        
        ErrorHandler.addErrorHandler();
    }

    public startServer() : void {
        this.app.listen(this.port, this.serverIP, () => {
            console.log("app is listening on " + this.serverIP 
                        + "port : " + this.port);
        }); 
    }

}