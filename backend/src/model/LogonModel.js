const sql = require('../database/connection');

var User = function(user){
    this.name = user.name;
    this.email = user.email;
    this.senha = user.senha;
    this.data_nascimento = user.data_nascimento;
};

User.createUser = function (newUser, result){
    sql.query('INSERT INTO users set ?', newUser, function (err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.getUserById = function (userId, result){
    sql.query('select user from users where id = ?', userId, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
        return res.json(res);
    });
    
};

User.getAllUsers = function (result){
    sql.query('select * from users', function(err, response){
        if(err){
            console.log('error: ', err);
            result(null, err);
        }else{
            console.log('users: ', response);
            result(null, response);
        }
    });
};

User.updateById = function (id, user, result){
    sql.query('update users set user = ? where id = ?', [user.user, id], function(err, res){
        if(err){
            console.log('error: ', err)
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

User.remove = function(id, result){
    sql.query('delete from users where id = ?', [id], function(err, res){
        if(err){
            console.log('error: ', err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

module.exports = User;