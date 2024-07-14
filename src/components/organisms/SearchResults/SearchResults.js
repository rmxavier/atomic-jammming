import React, { useEffect } from "react";
import { Track } from "../../molecules";

function SearchResults({ searchResults }) {

  useEffect(() => {
    console.log(searchResults);
  });

  return (
    <>
      {
        searchResults.map((result, index) => (
          <Track key={ index } row={ index % 2 === 0 ? 'even' : 'odd'} item={ result } />
        ))
      }
    </>
  );
}

export default SearchResults;