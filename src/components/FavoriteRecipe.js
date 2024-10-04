import React from 'react';
import '../FavoriteRecipe.css';

const FavoriteRecipe = ({ favorite, removeFavorite }) => {
    return (
        <div key={favorite.id} className="w-full flex shadow-md rounded-[15px] overflow-hidden">
            <img className="inline-block w-[90px] h-[90px] overflow-hidden" src="/image-not-found.png" alt="Img Placeholder"/>
            <div className="recipe-details inline-block pl-3 ">
                <div className="recipe-info inline-block">
                    <p className="text-md font-bold">{favorite.title}</p>
                    <p className="text-sm pt-2">{favorite.time} min.</p>
                </div>
                
                <i onClick={() => removeFavorite(favorite)}
                   className=" fa fa-heart fav-heart" aria-hidden="true">
                </i>

            </div>
                {/* <RecipeDetail recipe={recipe} /> */}
        </div>
    );
};


export default FavoriteRecipe;