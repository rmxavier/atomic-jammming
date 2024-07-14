import React from "react";
import './Playlist.css';
import { Track } from "../../molecules";

function Playlist({ playlistItems, removeFromPlaylist }) {
  return (
    <>
      {
        playlistItems.map((item, index) => {
          return (
            <Track 
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

export default Playlist;