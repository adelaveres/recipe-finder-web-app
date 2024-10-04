import React, {useState} from 'react';

const SearchBar = ({findRecipes}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        findRecipes(query);
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit} className="flex mb-20 border rounded-[20px]">
            <input
                type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder='What do you feel like eating?'
                className="flex-grow p-2 rounded-[20px]"
            />
            
            <button type="submit" className="ml-2 p-2">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </form>
    );
};

export default SearchBar;