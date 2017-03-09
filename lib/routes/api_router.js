var usercontrol = require("../controllers/users.server.controller");
var express = require("express");
var api = express.Router();



api.get("/users", function (req, res,next){

    usercontrol.find(req,res,next);
});
api.get("/user/:username", function (req, res,next){

    usercontrol.findOne(req,res,next);
});

api.post("/user", function (req, res,next){
    usercontrol.create(req, res, next);
});


api.put("/user", function (req, res,next){
    usercontrol.update(req, res, next);
});

api.delete("/user", function (req, res,next){
    usercontrol.delete(req, res, next);
});

api.post("/user/authenticate", function (req, res,next){
    usercontrol.authenticate(req, res, next);
});



api.get("/messages", function (req, res, next){});
api.post("/message", function (req, res, next){});

module.exports = api;
