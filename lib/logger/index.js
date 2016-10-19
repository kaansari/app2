/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var winston = require('winston')
 , config = require('../configuration');

function Logger(){
  return winston.add(winston.transports.File, {
    filename: config.get('logger:filename'),
    maxsize: 1048576,
    maxFiles: 3,
    level: config.get('logger:level')
  });
}

module.exports = new Logger();


