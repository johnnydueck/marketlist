const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const userId = request.headers.authorization
        console.log(userId)

        const produtos = await connection.query('select * from produto where id_mercado = "'+userId+'"', function(err, result){
            if(err){
                console.log('Error: '+err);
            }else{
                console.log('Data is here');
                console.log(result);
                return response.json(result);
            }
        });
    }
}