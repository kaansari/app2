var User = require('mongoose').model('User');
var jwt = require('jsonwebtoken');
var config = require('../configuration')


exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.find = function(req, res, next) {
   User.find(function (err, users) {
  if (err) return next(err);
  res.json(users);
}).sort({username: "ascending"})

};

exports.findOne = function(req, res, next) {
    var _username = req.params.username;
    User.findOne({username:_username},function (err, user) {
  if (err) return next(err);
  res.json(user);
});
};


exports.update = function(req, res, next) {
    var _username = req.body.username;
    var _objuser = req.body;
    User.findOneAndUpdate({username:_username},_objuser,{upsert:true, new: true},function (err, user) {
  if (err) return next(err);
  res.json(user);
});
};





exports.delete = function(req,res,next){

    var username = req.body.username;
    User.remove({ username: username }, function (err) {
  if (err) return next(err);
  res.json('Deleted');
});
};

 exports.authenticate = function(req, res, next) {

  // find the user
  User.findOne({
    username: req.body.username
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
        
      
      user.checkPassword(req.body.password,function(data){
       
        console.log(data);
          
                if (!data) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var utuser = {'_id': user._id}
        var token = jwt.sign(utuser, config.get('security:secret'),{
        expiresIn: '1h',
        issuer: 'MY_APP',
        algorithm: 'HS256'
    });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Token will expire in 1m!',
          token: token
        });

      }
    });


    }

  });
};
