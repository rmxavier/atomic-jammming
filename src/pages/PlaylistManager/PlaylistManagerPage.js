import React, { useState, useEffect } from 'react';
import './PlaylistManagerPage.css';
import { Playlist, SearchBar, SearchResults } from '../../components';
import { MainTemplate } from '../../templates';
import SpotifyApi from '../../utils/SpotifyApi';

function PlaylistManagerPage({ auth }) {

    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const awaitResults = async() => {
            const results = await SpotifyApi.search(searchTerm, auth);
            setSearchResults(results);
        }

        awaitResults();
        
    }, [ searchTerm ]);

    return (
        <MainTemplate>
            <div className="search">
                <SearchBar setSearchTerm={ setSearchTerm } />
            </div>
            <p>Termo: {searchTerm}</p>
            <div className="container">
                <div className="playlist">
                    <SearchResults searchResults={ searchResults } />
                </div>
                <div className="tracklist">
                    <Playlist />
                </div>
            </div>
        </MainTemplate>
    );
}

export default PlaylistManagerPage;