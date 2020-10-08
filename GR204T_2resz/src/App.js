import React from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Main } from './views/main/MAIN_PAGE';
import { Varo } from './views/varo_szoba/varo';
import { Elokeszito } from './views/elokeszito_szoba/elokeszito';
import { Jatek } from './views/jatekoldal/jatek';
import io from "socket.io-client";

export function App() {
  let socket = io('http://webprogramozas.inf.elte.hu:3030');
  return (
    <Router>
        <Switch>
          <Route path="/varo" >
            <Varo socket = {socket}></Varo>
          </Route>
          <Route path="/elokeszito" >
            <Elokeszito socket = {socket}></Elokeszito>
          </Route>
          <Route path="/jatek" >
            <Jatek socket = {socket}></Jatek>
          </Route>
          <Route path="/">
            <Main socket = {socket}></Main>
          </Route>
        </Switch>
    </Router>
  );
}