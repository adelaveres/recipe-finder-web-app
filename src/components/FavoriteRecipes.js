import React from 'react';
import FavoriteRecipe from './FavoriteRecipe';

const FavoriteRecipes = ({ favorites, removeFavorite}) => {

    // const favRecipe1 = {id: 3, title:"Salmon coated in mustard and pepper crust",time:'140'};
    // const favRecipe2 = {id: 4, title:"Winter pie with salmon filling",time:'150'};
    // const favRecipe3 = {id: 5, title:"Crab and salmon soup",time:'60'};


    return (
        <div className="grid grid-cols-1 gap-4 w-full">
            {/* <FavoriteRecipe key={3} favorite={favRecipe1} removeFavorite={removeFavorite} />
            <FavoriteRecipe key={4} favorite={favRecipe2} removeFavorite={removeFavorite} />
            <FavoriteRecipe key={5} favorite={favRecipe3} removeFavorite={removeFavorite} /> */}
             { favorites.length === 0 ? 
                    (
                        <p>No favorites yet.</p>
                    )
                    :(
                        favorites.map(favorite => (    
                            <FavoriteRecipe key={favorite.id} favorite={favorite} removeFavorite={removeFavorite}/>
                        ))
                        
                    )
                }
            {  
                
                
             }
        </div>
    );
};

export default FavoriteRecipes;