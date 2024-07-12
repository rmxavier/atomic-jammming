import React from "react";
import styles from './SearchResults.module.css'

function SearchResults({ searchResults }) {
  return (
    <>
      {
        searchResults.map((result, index) => (
          <div key={index} className={`${index % 2 === 0 ? styles.playlistItemEven : styles.playlistItemOdd} ${styles.playlistItem}`}>
            <p>{result.artists[0].name}</p>
            <p>{result.name}</p>
          </div>
        ))
      }
    </>
  );
}

export default SearchResults;