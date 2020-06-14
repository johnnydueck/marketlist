import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiTrash } from 'react-icons/fi'
import api from '../../services/api';

import './style.css';

export default function Profile(){
    const [produtos, setProdutos] = useState([]);

    const userId = localStorage.getItem('id');
    const userName = localStorage.getItem('userId');
    const history = useHistory();

    useEffect(() => {

        api.get('profile', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setProdutos(response.data);
        })
    }, [userId]);



    async function handleDeleteProduto(id){
        try{
            await api.delete(`/produto/${id}`, {
                headers: {
                    Authorization: userId
                }
            });


            setProdutos(produtos.filter(produto => produto.id !== id));
        }catch(err){
            alert('Erro ao deletar produto, tente novamente');
        }
    }


    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }


    return(
        <div className="profile-container">
            <header>
                <span>Bem Vindo, {userName}</span>
                <Link className="button" to="produto/novo">Cadastrar novo produto</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="e02041"/>
                </button>
            </header>

            <h1>Produtos Cadastrados</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                    <strong>PRODUTO</strong>
                <p>{produto.marca}</p>

                <strong>DESCRIÇÃO</strong>
                <p>{produto.descricao}</p>

                <strong>VALOR</strong>
                <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produto.valor)}</p>
                <button onClick={() => handleDeleteProduto(produto.id)} type="button">
                    <FiTrash2 size={20} color="a8a8b3"/>
                </button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}