import React from 'react';
import RecipeItem from './RecipeItem';

const RecipesList = ({addFavorite}) => {

    const fakeRecipe = {id:0, title:"Hamburger with onion", ingredients:"meat,onion"};

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>
            <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>
            <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>
            <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>
        </div>
    );
};

export default RecipesList;