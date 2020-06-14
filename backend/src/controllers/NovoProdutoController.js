const connection = require( '../database/connection');

module.exports = {

    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection.query('select count(id) from produto');

        const produtos = await connection.query('select * from produto');
    },

    async create(request, response){
        const { marca, descricao, valor} = request.body;
        const userId = request.headers.authorization;

        const[id] = await connection.query('insert into produto(marca, descricao, valor, id_mercado) values ("'+marca+'", "'+descricao+'", "'+valor+'", "'+userId+'")', function(err, result){
            if(err){
                console.log("Erro: "+err);
            }else{
                console.log("Produto cadastrado");
                return response.status(204).send();
                
            }
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const userId = request.headers.authorization;

        console.log(id)
        console.log(userId)

        const produto = connection.query('delete from produto where id = "'+id+'" and id_mercado = "'+userId+'"', function(err, result){
            if(err){
                console.log("Erro: "+err);
            }else{
                console.log("Produto deletado");
                return response.status(204).send();
            }
        });

    }

}