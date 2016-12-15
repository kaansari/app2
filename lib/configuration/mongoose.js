var config = require('../configuration/'),
    mongoose = require('mongoose');

module.exports = function() {
    
    var uri = config.get('db:mongouri');
    var db = mongoose.connect(uri);
    return db;
};