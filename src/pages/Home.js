import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import '../Home.css';
import RecipesList from '../components/RecipesList';
import { fetchRecipes } from '../api/recipeAPI';

const Home = ({ addFavorite }) => {
    
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async (query) => {
        const results = await fetchRecipes(query);
        // console.log("Recipes: \n"+ results );
        setRecipes(results);
      };

    return(
        <div className="home-wrapper">
            
         <div className= "container mx-auto p-4">
            <h1 className="text-2xl font-bold">
                Recipe Finder
            </h1>
            <SearchBar findRecipes={handleSearch}/>
            <RecipesList recipes={recipes} addFavorite={addFavorite}/>
        </div>

        

        </div>
    );
};

export default Home;