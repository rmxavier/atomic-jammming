import React from "react";
import './Track.css'

function Track({ key, row, item}) {
    return (
      <div key={key} className={`${row === 'even' ? 'track--even' : 'track--odd'} track`}>
        <img className="trackImage" src={item.album.images[2].url} />
        <div className="artistName">{item.artists[0].name}</div>
        <div className="trackName">{item.name}</div>
        <div className="action">+</div>
      </div>
    );
}

export default Track;