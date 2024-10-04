import {useState} from 'react';

const useFavorites =  () => {

    const [favorites, setFavorites] = useState([]);

    const addFavorite = (recipe) => {
        setFavorites((prev) => [...prev, recipe]);
        console.log("Favorites: "+favorites);
    };

    const removeFavorite = (recipeId) => {
        setFavorites((prev) => prev.filter((recipe)=> recipe.id !== recipeId));
    };

    return { favorites, addFavorite, removeFavorite };

};

export default useFavorites;