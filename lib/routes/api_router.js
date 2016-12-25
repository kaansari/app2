var usercontrol = require("../controllers/users.server.controller");
var express = require("express");
var api = express.Router();



api.get("/users", function (req, res,next){

    res.send("get users get");
});
api.post("/user", function (req, res,next){
    console.log("ready to handle post request")
    usercontrol.create(req, res, next);
});


api.get("/messages", function (req, res, next){});
api.post("/message", function (req, res, next){});

module.exports = api;
