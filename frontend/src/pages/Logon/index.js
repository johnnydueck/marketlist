import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';

import './styles.css';


import api from '../../services/api';

export default function Logon(){

    const [userId, setId] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

       

        


        try{
            const response = await api.post('sessions', { userId, senha });
            console.log(response.data[0].id);
                       
            localStorage.setItem('userId', userId);
            localStorage.setItem('id', response.data[0].id);

            history.push('/profile')

        }catch(err){
            alert('Falha no login, tente novamente');
        }
    }


    return(
        <div className="logon-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <input placeholder="ID" value={userId} onChange={e => setId(e.target.value)}/>
                    <input type="password" placeholder="Senha" value={senha} onChange = {e => setSenha(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                </form>
            </section>
        </div>
    )
}