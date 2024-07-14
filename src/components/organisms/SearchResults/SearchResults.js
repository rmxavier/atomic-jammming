import React, { useEffect } from "react";
import { Track } from "../../molecules";

function SearchResults({ searchResults, addToPlaylist }) {

  useEffect(() => {
    console.log(searchResults);
  });

  return (
    <>
      {
        searchResults.map((result, index) => {

          const track = {
            id: result.id,
            imgUrl: result.album.images[2].url,
            title: result.name,
            artist: result.artists[0].name
          }

          return (
            <Track 
              key={ index } 
              index={ index }
              row={ index % 2 === 0 ? 'even' : 'odd'} 
              track={ track } 
              addToPlaylist={addToPlaylist} />);
        })
      }
    </>
  );
}

export default SearchResults;