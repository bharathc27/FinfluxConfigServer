import {Router, Request, Response} from 'express';

import {LoginController} from './LoginController';
import { IAppRouter } from './IRouter';

export class AppRouter {

    private loginController : LoginController;
    
    constructor() {
        this.loginController = new LoginController();
    }

    public getLoginController() : LoginController {
        return this.loginController;
    } 

};