var logger = require("../logger");

exports.index = function(err,req, res, next){
  logger.error("Server Error"+err);
  res.json(500, 'Server Error');
};


