"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var LoginController = /** @class */ (function () {
    function LoginController() {
        this.router = express_1.Router();
        this.router.get("/", this.routeHome);
        this.router.get("/:name", this.routeName);
    }
    LoginController.prototype.routeHome = function (req, resp) {
        resp.send("Hello World");
    };
    LoginController.prototype.routeName = function (req, resp) {
        var name = req.params.name;
        resp.send('Hello : ${name}');
    };
    LoginController.prototype.getRouter = function () {
        return this.router;
    };
    return LoginController;
}());
exports.LoginController = LoginController;
