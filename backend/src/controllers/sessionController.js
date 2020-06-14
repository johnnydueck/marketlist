const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { userId } = request.body;
        const { senha } = request.body;
        
        //'select id from mercado where userId ="'+userId+'" and senha = "'+senha+'"'

        const user = await connection.query('select id from mercado where userId ="'+userId+'" and senha = "'+senha+'"', function(err, result){
            if(err){
                console.log('Error: '+err);
            }else{ 
                return response.json(result);
            }
        });
        
    }
}