const connection = require('../database/connection');
const User = require('../model/LogonModel');



module.exports = {
    
    index(request, response){
        const user = connection.query('select * from users', function(err, result){
            if(err) console.log('error: ', err);
            else{
                console.log('data is here');
                console.log(result);
                return response.json(result);
            }
        });
    }
};
