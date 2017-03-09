var express = require('express')
, http = require('http')
, config = require('../configuration')
, heartbeat = require('../routes/heartbeat')
, notFound = require('../middleware/notFound')
, error500 = require('../middleware/serverError')
, bodyParser = require('body-parser')
, morgan = require('morgan')
, path = require('path')
, mongoose = require('../configuration/mongoose')
, modeluser = require('../models/user.server.model')
, db = new mongoose()
, app = express()
, apiRouter = require('../routes/api_router');


app.use(morgan("dev"));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('port', config.get('express:port'));
app.set('superSecret', config.get('security:secret'));

app.get('/heartbeat', heartbeat.index);
app.use('/api', apiRouter);
app.use(notFound.index);
app.use(error500.index);

http.createServer(app).listen(app.get('port'));
module.exports = app;
