import React, {useState} from 'react';

const SearchBar = ({searchRecipe}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchRecipe(query);
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder='What do you want to eat?'
                className="flex-grow p-2 border rounded"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
                Search
            </button>
        </form>
    );
};

export default SearchBar;