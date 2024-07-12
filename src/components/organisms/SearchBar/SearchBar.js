import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setSearchTerm }) {

    const [ searchInput, setSearchInput ] = useState('');

    const handleChange = ({ target }) => {
        setSearchInput(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(searchInput);
    }

    return (
        <div className="searchForm">
            <form onSubmit={ handleSubmit }>
                <input type="text" name="search" className="searchInput" onChange={ handleChange } />
                <button type="submit" className="searchButton">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
