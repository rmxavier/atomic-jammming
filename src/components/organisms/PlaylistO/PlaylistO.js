import React from "react";
import './PlaylistO.css';
import { TrackM } from "../../molecules";

function PlaylistO({ playlistTracks, removeFromPlaylist }) {
  return (
    <>
      {
        playlistTracks.map((item, index) => {
          return (
            <TrackM 
              key={ index } 
              index={ index }
              row={ index % 2 === 0 ? 'even' : 'odd'} 
              track={ item } 
              removeFromPlaylist={removeFromPlaylist} />
          );
        })
      }
    </>
  );
}

export default PlaylistO;