import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from '../../client/src/componentes/Landing'


import Detail from './componentes/CardsDetail/Detail';
import Home from './componentes/Home/Home';
import PokemonCreated from './componentes/PokemonCreated/PokemonCreated';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path= "/detail/:id" component={Detail} />
        <Route path = "/createpokemon" component = {PokemonCreated}/>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

