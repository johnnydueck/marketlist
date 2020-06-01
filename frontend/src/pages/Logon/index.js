import React, { useState } from 'react';

import './styles.css';

export default function Logon(){

    const [id, setId] = useState('');
    const [senha, setSenha] = useState('');


    return(
        <div className="logon-container">
            <section className="form">
                <from>
                    <input placeholder="ID" value={id} onChange={e => setId(e.target.value)}/>
                    <input type="password" placeholder="Senha" value={senha} onChange = {e => setSenha(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                </from>
            </section>
        </div>
    )
}