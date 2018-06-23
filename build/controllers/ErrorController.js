"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.addErrorHandler = function () {
        ErrorHandler.router.use(function (error, request, resp, next) {
            if (error) {
                console.log("Unable to server request : " + request.baseUrl);
            }
            resp.status(404);
            resp.send("Oops page not found.");
        });
    };
    ErrorHandler.getRouter = function () {
        return ErrorHandler.router;
    };
    ErrorHandler.router = express_1.Router();
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
