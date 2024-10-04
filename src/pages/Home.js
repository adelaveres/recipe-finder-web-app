import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import '../Home.css';
import RecipesList from '../components/RecipesList';
import { fetchRecipes } from '../api/recipeAPI';
import useFavorites from '../hooks/useFavorites';
import FavoriteRecipes from '../components/FavoriteRecipes';

const Home = () => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const {favorites, addFavorite, removeFavorite} = useFavorites();
    let currentQuery = '';
    
    
    // addFavorite(favRecipe1);


    const handleSearch = async (query) => {
        currentQuery = query;
        const results = await fetchRecipes(query, setLoading);
        // const results = [
        //     {id: 0, 'title':'Apple Bars','time':'20'},
        //     {id: 1,'title':'Apple Pie','time':'60'},
        //     {id: 2,'title':'Chicken breast with apple filling','time':'120'}
        // ];
        console.log("Recipes: \n"+ results );
        setRecipes(results);
      };


    useEffect(() => {
        console.log("Favorites changed: ", favorites);
    }, [favorites]);



    return(
        <div className="home-wrapper w-full"> 
            <div className= "container mt-12 mx-auto w-[430px] p-4">

                <SearchBar findRecipes={handleSearch}/>
                
                {
                    (recipes.length === 0) ? (
                        (loading === true) ? 
                            (
                                <div className="w-full">
                                    <div className='mx-auto w-[60px]'>
                                         <i className=" fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                                    </div>
                                </div>
                            )
                            :(
                                <div>
                                    <h1 className="text-3xl font-extrabold pb-4">Favorites</h1>
                                    <FavoriteRecipes favorites={favorites} removeFavorite={removeFavorite}/>  
                                </div>
                            )
                    )
                    :(
                        <div>
                            <h1 className="text-3xl font-extrabold pb-4">Suggested Recipes</h1>
                            <RecipesList findRecipes={handleSearch} recipes={recipes} addFavorite={addFavorite} loading={loading} query={currentQuery}/>
                            {/* <a href="">See updated favorites list.</a> */}
                            
                        </div>
                    )
                
                }
                    
                       
                
                
            </div>
        </div>
    );
};

export default Home;