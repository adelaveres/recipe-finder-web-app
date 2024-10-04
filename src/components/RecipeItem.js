import React from 'react';
import '../RecipeItem.css';

const RecipeItem = ({ recipe, addFavorite }) => {


    let firstTime = true;
    
    const handleClick = (recipe) => {

        let currentRecipe = document.getElementById(String(recipe.id));

        let emptyHeart = currentRecipe.querySelector("#empty-heart");
        if(firstTime){
            emptyHeart.style.display="inline-block";
            firstTime=false;
        }
        let filledHeart = currentRecipe.querySelector("#filled-heart");

        if(emptyHeart.style.display === "inline-block"){ 
            emptyHeart.style.display = "none";          
            filledHeart.style.display = "inline-block"; 
        }else{
            emptyHeart.style.display = "inline-block";           
            filledHeart.style.display = "none"; 
        }
        addFavorite(recipe);
    }



    return (
        <div id={recipe.id} key={recipe.id} className="w-full flex shadow-md rounded-[15px] overflow-hidden">
            <img className="inline-block w-[90px] h-[90px] overflow-hidden" src="/image-not-found.png" alt="Img Placeholder"/>
            <div className="recipe-details inline-block pl-3 ">
                <div className="recipe-info inline-block">
                    <p className="text-md font-bold">{recipe.title}</p>
                    <p className="text-sm pt-2">{recipe.time} min.</p>
                </div>
                
                <i id="empty-heart" onClick={() => handleClick(recipe)}
                   className=" fa fa-heart-o heart" aria-hidden="true">
                </i>

                <i id="filled-heart" onClick={() => handleClick(recipe)}
                   className=" fa fa-heart full-heart" aria-hidden="true">
                </i>

            </div>
                {/* <RecipeDetail recipe={recipe} /> */}
        </div>
    );
};


export default RecipeItem;