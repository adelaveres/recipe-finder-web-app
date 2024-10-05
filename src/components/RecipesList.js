import React from 'react';
import RecipeItem from './RecipeItem';


const RecipesList = ({ findRecipes, recipes, addFavorite, query, setRecipes }) => {

    // const fakeRecipe = {id:0, title:"Hamburger with onion", ingredients:"meat,onion"};

    const handleClick = (e) => {
        e.preventDefault();
        findRecipes("spicy "+query);
        setRecipes([]);
        // setQuery('');
    }

   

    return (
        <div>
            <div className="grid grid-cols-1 gap-4">

            
            {/* <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>
            <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>
            <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>
            <RecipeItem recipe={fakeRecipe} addFavorite={addFavorite}/>  */}
            
            { 
                recipes.map(recipe => (    
                    <RecipeItem key={recipe.id} recipe={recipe} addFavorite={addFavorite}/>
                ))
                
             } 

             </div>
             <div className="w-full">
                    <button className="reload-button mx-auto w-[180px] text border"
                        onClick={handleClick}
                    > I don't like these</button>
            </div>
        </div>
    );
};

export default RecipesList;