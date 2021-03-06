"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginController_1 = require("./LoginController");
var AppRouter = /** @class */ (function () {
    function AppRouter() {
        this.loginController = new LoginController_1.LoginController();
    }
    AppRouter.prototype.getLoginController = function () {
        return this.loginController;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
;
