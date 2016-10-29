var logger = require("../logger");
exports.index = function(req, res){
    logger.error('Not Found');
    res.status(200).json('{OK}')
};