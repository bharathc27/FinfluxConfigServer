"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("./controllers");
var app = express();
var port = process.env.PORT || 8000;
app.use('/login', controllers_1.LoginController);
app.listen(port, function () {
    console.log("app is listening on port : ${port}");
});
