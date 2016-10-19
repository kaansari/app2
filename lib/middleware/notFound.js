var logger = require("../logger");
exports.index = function(req, res, next){
   logger.error('Not Found');
   res.send(404, "Not Found");
    
};