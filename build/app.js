"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("./controllers");
var express = require("express");
var path = require("path");
var ErrorController_1 = require("./controllers/ErrorController");
var express_1 = require("express");
var App = /** @class */ (function () {
    function App(serverIP, port) {
        this.serverIP = serverIP;
        this.port = port;
        this.app = express();
        this.router = express_1.Router();
        this.appRouter = new controllers_1.AppRouter();
        this.init();
    }
    App.prototype.init = function () {
        this.setRoutes();
    };
    App.prototype.setRoutes = function () {
        //Map Routes
        this.app.use("/login", this.appRouter.getLoginController().getRouter());
        //Static routing
        //Static file rendering
        this.app.use("/static", express.static(path.join(__dirname, '../app/public')));
        this.app.use(express.static(path.join(__dirname, '../angular/dist/angular/')));
        console.log("angular path : " + path.join(__dirname, '../angular/dist/angular/index.html'));
        ErrorController_1.ErrorHandler.addErrorHandler();
    };
    App.prototype.startServer = function () {
        var _this = this;
        this.app.listen(this.port, this.serverIP, function () {
            console.log("app is listening on " + _this.serverIP
                + "port : " + _this.port);
        });
    };
    return App;
}());
exports.App = App;
