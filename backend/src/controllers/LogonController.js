const connection = require('../database/connection');

module.exports = {
    
    index(request, response){
        const user = connection.query('select * from users', function(err, result){
            if(err) console.log('error: ', err);
            else{
                return response.json(result);
            }
        });
    }
};
