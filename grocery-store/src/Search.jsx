import React from 'react';

const Search = ({ setSearchState }) => {

    return (
        <div className="search-area">
            <label className="search-title">Search</label><input className="search" onChange={(e) => setSearchState(e.target.value)}></input>
        </div>

    )
}

export default Search;