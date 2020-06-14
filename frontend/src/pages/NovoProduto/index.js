import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

export default function NovoProduto(){

    const[marca, setProduto] = useState('');
    const[descricao, setDescricao] = useState('');
    const[valor, setValor] = useState('');

    const history = useHistory();
    const userId = localStorage.getItem('id');

    async function handleNovoProduto(e){
        e.preventDefault();


        const data = {
            marca,
            descricao,
            valor,
        };

        try{
            await api.post('produtos', data, {
                headers: {
                    Authorization: userId,
                }
            });

            history.push('/profile')
        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente');
        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <h1>Cadastrar novo produto</h1>
                    <p>Informe os dados do produto</p>

                    <Link className="back-link" to='/profile'>
                        <FiArrowLeft size={16} color='e02041'/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNovoProduto}>
                    <input placeholder="Marca" value={marca} onChange={e => setProduto(e.target.value)}/>
                    <input placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                    <input placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)}/>

                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>

        </div>
    );

}