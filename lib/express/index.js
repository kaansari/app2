var express = require('express')
  , http = require('http')
  , config = require('../configuration')
  , heartbeat = require('../routes/heartbeat')
  , notFound = require('../middleware/notFound')
  , mongoose = require('../configuration/mongoose')
  , user = require('../models/user.server.model')
  , api = require('../routes/users.server.routes')
, bodyParser = require('body-parser')
,userscontrol = require('../controllers/users.server.controller')
, path = require("path")
, db = mongoose()
, app = express();


app.use(bodyParser.json())
app.set('port', config.get('express:port'));
app.use(express.logger({ immediate: true, format: 'dev' }));
app.get('/heartbeat', heartbeat.index);
app.use('/user',userscontrol.create);
app.use(notFound.index);

http.createServer(app).listen(app.get('port'));
module.exports = app;