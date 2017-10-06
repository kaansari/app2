

exports.index = function(request, response){

       response.send('It worked! User id is: ' + request.user._id + 'and emial is '+ request.user.email);
};

