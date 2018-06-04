"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
//Static file rendering
app.use(express.static(path.join(__dirname, '../app/public')));
console.log("dirName : ", __dirname + " public Folder " + path.join(__dirname, "../app/public"));
//Routing
// app.use("/", IndexController);
// app.use('/login', LoginController);
app.listen(port, server_ip_address, function () {
    console.log("app is listening on " + server_ip_address
        + "port : " + port);
});
