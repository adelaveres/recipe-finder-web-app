import React from 'react';
import SearchBar from '../components/SearchBar';
import '../Home.css';

const Home = () => {
    
    const handleSearch = () => {
        
        console.log("Searched for recipes.")
      };

    return(
        <div className="home-wrapper">
            
         <div className= "container mx-auto p-4">
            <h1 className="text-2xl font-bold">
                Recipe Finder
            </h1>
            <SearchBar searchRecipe={handleSearch}/>
        </div>
        </div>
    );
};

export default Home;