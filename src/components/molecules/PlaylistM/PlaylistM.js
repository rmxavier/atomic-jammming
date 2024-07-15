import React from "react";
import './PlaylistM.css'
import { ActionButtonA } from "../../atoms";

function PlaylistM({ row, key, handleClick, playlist }) {
  const rowModifier = row === 'even' ? 'playlist--even' : 'playlist--odd';

  return (
    <div key={key} className={`playlist ${rowModifier}`}>
      <div className="playlistContent">
        <div className="playlistName">{playlist.name}</div>
      </div>
      <div className="action"><ActionButtonA>Remove</ActionButtonA></div>
    </div>
  );
}

export default PlaylistM;