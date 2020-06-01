const User = require('../model/LogonModel');

exports.list_users = function(request, response){
    User.getAllUsers(function(err, user){
        console.log('controller');
        if(err){
            response.send(err);
            console.log('response', user);
        }
        response.send(user);
    });
};

exports.create_user = function(request, response){
    var new_user = new User(request.body);

    if(!new_user.user || !new_user.status){
        response.status(400).send({error:true, message: 'Please provide user/status'});
    }

    else{
        User.createUser(new_user, function(err, user){
            if(err){
                response.send(err);
            }
            response.json(user);
        });
    }
};

exports.read_user = function(request, response){
    User.getUserById(request.params.userId, function(err, user){
        if(err){
            response.send(err);
        }
        response.json(user);
    });
};


exports.update_user = function (request, response){
    User.updateById(request.params.userId, new User(request.body), function (err, user){
        if(err){
            response.send(err);
        }
        response.json(user);
    });
};

exports.delete_user = function(request, response){
    User.remove(request.params.userId, function(err, task){
        if(err){
            response.send(err);
        }
        response.json({message: 'User successfully deleted'});
    });
};