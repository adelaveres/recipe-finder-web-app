import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import useFavorites from './hooks/useFavorites';

function App() {

  const {favorites, addFavorite, removeFavorite} = useFavorites();

  return (
    <Router>
      <Routes>
        
        <Route path="/" 
               element={<Home addFavorite={addFavorite}/>} />
        <Route path="/favorites" 
               element={<Favorites favorites={favorites} removeFavorite={removeFavorite}/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
