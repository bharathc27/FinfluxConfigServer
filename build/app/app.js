"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("./controllers");
var express = require("express");
var path = require("path");
var App = /** @class */ (function () {
    function App(serverIP, port) {
        this.serverIP = serverIP;
        this.port = port;
        this.app = express();
        this.router = new controllers_1.AppRouter();
        this.init();
    }
    App.prototype.init = function () {
        //Static file rendering
        this.app.use(express.static(path.join(__dirname, '../app/public')));
        this.setRoutes();
    };
    App.prototype.setRoutes = function () {
        //Routing
        this.app.use("/", express.static(path.join(__dirname, '../public/angular/dst/angular/index.html')));
        this.app.use('/login', this.router.getLoginController().getRouter());
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
