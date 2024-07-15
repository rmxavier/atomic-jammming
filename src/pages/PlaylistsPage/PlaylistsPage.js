import { MainTemplate } from "../../templates";
import { SearchBarO, PlaylistsO } from "../../components";
import { useState } from "react";
import { useParams } from "react-router-dom";

function PlaylistsPage() {

  const [ playlists, setPlaylists ] = useState([]);
  
  return (
    <MainTemplate>
        <div className="search">
            <SearchBarO />
        </div>
        <div className="container">
            <div className="playlistTracks">
              <div className="sectionTitle">Playlist 'Mock playlist title'</div>
              <PlaylistsO playlists={ playlists }/>
            </div>
        </div>
    </MainTemplate>
  );
}

export default PlaylistsPage;