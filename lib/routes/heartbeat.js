var logger = require("../logger");
exports.index = function(req, res){
    logger.error('Not Found');
    res.json(200, 'OK');
};