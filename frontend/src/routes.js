import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import profile from './pages/profile';
import NovoProduto from './pages/NovoProduto';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}></Route>
                <Route path="/profile" component={profile}></Route>
                <Route path='/produto/novo' component={NovoProduto}></Route>
            </Switch>
        </BrowserRouter>
    );
}