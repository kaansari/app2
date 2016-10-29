var express = require('express')
    , config = require('../configuration')
    , heartbeat = require('../routes/heartbeat')
    , notFound = require('../middleware/notFound')
  , app = express()
    ;

app.set('port', 3000);
app.use(require('connect-logger')({immediate: true, format: 'dev'}));
app.get('/heartbeat',heartbeat.index);
app.get(notFound.index);


app.listen(app.get('port'));
module.exports = app;
