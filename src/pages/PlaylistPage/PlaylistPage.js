import React, { useState, useEffect } from 'react';
import './PlaylistPage.css';
import { PlaylistO, SearchBarO, SearchResultsO } from '../../components';
import { MainTemplate } from '../../templates';
import SpotifyApi from '../../utils/SpotifyApi';

function PlaylistPage({ auth }) {

    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResultsTracks, setSearchResultsTracks] = useState([]);
    const [ playlistTracks, setPlaylistTracks ] =useState([{id: '123', imgUrl: 'https://i.scdn.co/image/ab67616d0000485140cbf5330f808105d7ba9a44', title: 'Mock title', artist: 'Mock artist'}]);

    const addToPlaylist = (thisTrack) => {
      setPlaylistTracks((prev) => [ ...prev, thisTrack]);
    }

    const removeFromPlaylist = (index) => {
      setPlaylistTracks((prev) => prev.filter((item, thisIndex) => thisIndex !== index));
    }

    useEffect(() => {
        const awaitResults = async() => {
            const results = await SpotifyApi.search(searchTerm, auth);
            setSearchResultsTracks(results);
        }

        awaitResults();
        
    }, [ searchTerm ]);

    return (
        <MainTemplate>
            <div className="search">
                <SearchBarO setSearchTerm={ setSearchTerm } />
            </div>
            <div className="container">
                <div className="searchResultsTracks">
                  <div className="sectionTitle">Results for: '{searchTerm}'</div>
                  <SearchResultsO searchResultsTracks={ searchResultsTracks } addToPlaylist={addToPlaylist} />
                </div>
                <div className="playlistTracks">
                  <div className="sectionTitle">Playlist 'Mock playlist title'</div>
                  <PlaylistO playlistTracks={playlistTracks} removeFromPlaylist={ removeFromPlaylist }/>
                </div>
            </div>
        </MainTemplate>
    );
}

export default PlaylistPage;