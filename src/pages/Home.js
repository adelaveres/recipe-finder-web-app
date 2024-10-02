import React from 'react';
import SearchBar from '../components/SearchBar';
import '../Home.css';
import RecipeItem from '../components/RecipeItem';

const Home = ({addFavorite}) => {
    
    const handleSearch = () => {
        
        console.log("Searched for recipes.")
      };

    const fakeRecipe = {id:0, title:"Hamburger with onion", ingredients:"meat,onion"};

    return(
        <div className="home-wrapper">
            
         <div className= "container mx-auto p-4">
            <h1 className="text-2xl font-bold">
                Recipe Finder
            </h1>
            <SearchBar searchRecipe={handleSearch}/>
        </div>

        <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>

        </div>
    );
};

export default Home;