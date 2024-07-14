import React, { act } from "react";
import './Track.css'

function Track({ key, index, row, track, addToPlaylist, removeFromPlaylist }) {
  const rowModifier = row === 'even' ? 'track--even' : 'track--odd';
  const actionText = addToPlaylist ? 'Add' : 'Remove';
  const actionButtonModifier = addToPlaylist ? 'actionButton--add' : 'actionButton--remove'

  const handleClick = ()=> {
    if (addToPlaylist) {
      addToPlaylist(track);
    } else {
      removeFromPlaylist(index)
    }
  }

  return (
    <div key={key} className={`track ${rowModifier}`}>
      <img className="trackImage" src={track.imgUrl} alt="" />
      <div className="artistName">{track.artist}</div>
      <div className="trackName">{track.title}</div>
      <div className="action"><button onClick={handleClick} className={ 'actionButton  '+ actionButtonModifier }>{ actionText }</button></div>
    </div>
  );
}

export default Track;