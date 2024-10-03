import React from 'react';
import RecipeItem from './RecipeItem';

const RecipesList = ({ recipes, addFavorite }) => {

    // const fakeRecipe = {id:0, title:"Hamburger with onion", ingredients:"meat,onion"};

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>
            <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>
            <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>
            <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>  */}
            
            { (recipes.length > 0) ? (
                recipes.map(recipe => (    
                    <RecipeItem key={recipe.id} recipe={recipe} addFavorite={addFavorite}/>
                ))
             )
             : (
                 <h1>No recipes found.</h1>
             )} 
        </div>
    );
};

export default RecipesList;