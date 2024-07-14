import React, { useState, useEffect } from 'react';
import './PlaylistManagerPage.css';
import { Playlist, SearchBar, SearchResults } from '../../components';
import { MainTemplate } from '../../templates';
import SpotifyApi from '../../utils/SpotifyApi';

function PlaylistManagerPage({ auth }) {

    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResults, setSearchResults] = useState([]);
    const [ playlistItems, setPlaylistItems ] =useState([{id: '123', imgUrl: 'https://i.scdn.co/image/ab67616d0000485140cbf5330f808105d7ba9a44', title: 'Mock title', artist: 'Mock artist'}]);

    const addToPlaylist = (thisTrack) => {
      setPlaylistItems((prev) => [ ...prev, thisTrack]);
    }

    const removeFromPlaylist = (index) => {
      setPlaylistItems((prev) => prev.filter((item, thisIndex) => thisIndex !== index));
    }

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
            <div className="container">
                <div className="playlist">
                  <div className="sectionTitle">Results for: '{searchTerm}'</div>
                  <SearchResults searchResults={ searchResults } addToPlaylist={addToPlaylist} />
                </div>
                <div className="tracklist">
                  <div className="sectionTitle">Playlist 'Mock playlist title'</div>
                  <Playlist playlistItems={playlistItems} removeFromPlaylist={ removeFromPlaylist }/>
                </div>
            </div>
        </MainTemplate>
    );
}

export default PlaylistManagerPage;