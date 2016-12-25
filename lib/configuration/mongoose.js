var config = require('../configuration/'),
    mongoose = require('mongoose'),
    usermodel = require('../models/user.server.model');

module.exports = function() {
    
    var uri = config.get('db:mongouri');
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(uri);
    return db;
};
