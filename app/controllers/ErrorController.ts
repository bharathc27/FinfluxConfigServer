import { Router, Request, Response, NextFunction } from "express";
import { IAppRouter } from "./IRouter";

export class ErrorHandler {

    private static router: Router = Router();

    public static addErrorHandler() {

        ErrorHandler.router.use((error: Error, request: Request, resp: Response, next: NextFunction) => {

            if (error) {
                console.log("Unable to server request : " + request.baseUrl);
            }

            resp.status(404);
            resp.send("Oops page not found.")
        });

    }

    public static getRouter() : Router {
        return ErrorHandler.router;
    }

}