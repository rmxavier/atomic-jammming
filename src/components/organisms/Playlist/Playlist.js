import React from "react";
import './Playlist.css';

function Playlist() {
  return (
    <>
      <div className="playlistItemEven playlistItem">
        <p>Linha 1</p>
        <p>Linha2</p>
      </div>
      <div className="playlistItemOdd playlistItem">
        <p>Linha 1</p>
        <p>Linha2</p>
      </div>
      <div className="playlistItemEven playlistItem">
        <p>Linha 1</p>
        <p>Linha2</p>
      </div>
      <div className="playlistItemOdd playlistItem">
        <p>Linha 1</p>
        <p>Linha2</p>
      </div>
    </>
  );
}

export default Playlist;