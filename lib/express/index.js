var express = require('express')
  , http = require('http')
  , config = require('../configuration')
  , heartbeat = require('../routes/heartbeat')
  , notFound = require('../middleware/notFound')
  , bodyParser = require('body-parser')

, path = require('path')
, mongoose = require('../configuration/mongoose')
, modeluser = require('../models/user.server.model')
, db = new mongoose()
, app = express()
, apiRouter = require('../routes/api_router');



app.use(bodyParser.json())
app.set('port', config.get('express:port'));

app.get('/heartbeat', heartbeat.index);
app.use('/api', apiRouter)
app.use(notFound.index);
app.use(function(err,req,res,next) {
  console.log("Server Error"+err);
    res.code
    res.json(500, err);
});

http.createServer(app).listen(app.get('port'));
module.exports = app;
