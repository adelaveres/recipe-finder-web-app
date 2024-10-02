import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import useFavorites from './hooks/useFavorites';

function App() {

  const {favorites, addFavorite, removeFavorite} = useFavorites();

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home addFavorite={addFavorite}/>
        </Route>
        <Route path="/favorites">
          <Favorites favorites={favorites} removeFavorite={removeFavorite} />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
