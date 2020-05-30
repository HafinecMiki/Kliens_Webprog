import React from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Main } from './views/main/MAIN_PAGE';
import { Varo } from './views/varo_szoba/varo';
import { Elokeszito } from './views/elokeszito_szoba/elokeszito';
import { Jatek } from './views/jatekoldal/jatek';

export function App() {
  
  return (
    <Router>
        <Switch>
          <Route path="/varo" >
            <Varo></Varo>
          </Route>
          <Route path="/elokeszito" >
            <Elokeszito></Elokeszito>
          </Route>
          <Route path="/jatek" >
            <Jatek></Jatek>
          </Route>
          <Route path="/">
            <Main></Main>
          </Route>
        </Switch>
    </Router>
  );
}