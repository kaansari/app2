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
, passport = require("passport")
, apiRouter = require('../routes/api_router');


app.use(morgan("dev"));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

// Bring in defined Passport Strategy
require('../configuration/passport')(passport);


app.set('port', config.get('express:port'));
app.set('superSecret', config.get('security:secret'));

app.get('/heartbeat', passport.authenticate('jwt', { session: false }), function(req, res) {
  res.send('It worked! User id is: ' + req.user._id + 'and emial is '+ req.user.email);
});

app.use('/api', apiRouter);
app.use(notFound.index);
app.use(error500.index);

http.createServer(app).listen(app.get('port'));
module.exports = app;
