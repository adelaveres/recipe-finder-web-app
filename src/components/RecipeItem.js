import React from 'react';

const RecipeItem = ({ recipe, addFavorite }) => {
    return (
        <div className="recipeItem">
            <div key={recipe.id} className="border rounded p-4">
                <h3 className="font-bold">{recipe.title}</h3>
                 <button 
                    onClick={() => addFavorite(recipe)} 
                    className="mt-2 p-2 bg-green-500 text-white rounded">
                    Add to Favorites
                </button>
                {/* <RecipeDetail recipe={recipe} /> */}
             </div>
        </div>
    );
};


export default RecipeItem;