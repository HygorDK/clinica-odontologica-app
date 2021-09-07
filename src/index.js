import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './views/Menu'
import * as serviceWorker from './serviceWorker'
import CadastroPaciente from './views/CadastroPaciente'
import ClienteMostrar from  './views/ClienteMostrar'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/Menu" component={Menu} />
        <Route path="/CadastroPaciente" component={CadastroPaciente} />
        <Route path="/cliente:id" component ={ClienteMostrar} />
        
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();