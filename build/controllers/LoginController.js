"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get("/", function (req, resp) {
    resp.send("Hello World");
});
router.get("/:name", function (req, resp) {
    var name = req.params.name;
    resp.send('Hello : ${name}');
});
exports.LoginController = router;
