import React, { useEffect } from "react";
import './SearchResultsO.css';
import { TrackM } from "../../molecules";

function SearchResults({ searchResultsTracks, addToPlaylist }) {

  useEffect(() => {
    console.log(searchResultsTracks);
  });

  return (
    <>
      {
        searchResultsTracks.map((result, index) => {

          const track = {
            id: result.id,
            imgUrl: result.album.images[2].url,
            title: result.name,
            artist: result.artists[0].name
          }

          return (
            <TrackM 
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