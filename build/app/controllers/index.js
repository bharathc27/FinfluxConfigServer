"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var LoginController_1 = require("./LoginController");
var AppRouter = /** @class */ (function () {
    function AppRouter() {
        this.loginController = new LoginController_1.LoginController();
        this.router = express_1.Router();
    }
    AppRouter.prototype.getLoginController = function () {
        return this.loginController;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
;
