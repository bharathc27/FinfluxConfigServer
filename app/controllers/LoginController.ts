import {Router, Request, Response, IRouter} from 'express';
import { IAppRouter } from './IRouter';

export class LoginController implements IAppRouter {

    private router: Router;

    constructor() {
        this.router = Router();
        this.router.get("/", this.routeHome)
        this.router.get("/:name", this.routeName);
    }

    private routeHome(req: Request, resp: Response) : void {
        resp.send("Hello World");
    }

    private routeName(req: Request, resp: Response) {
        let {name} = req.params;
        
        resp.send('Hello : ${name}');
    }

    public getRouter() : Router {
        return this.router;
    }

}