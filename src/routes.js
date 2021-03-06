import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import Recomendations from './Recomendations';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {App}/>
                <Route path="/recomendations" exact component= {Recomendations}/>

            </Switch>
        </BrowserRouter>
    )
}