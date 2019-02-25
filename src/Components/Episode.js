import React from 'react';

const Episode = (props) => {
  let myEpisode = props.eachEpisode
  // debugger

  return (
    <div>
      Episode {myEpisode.number} - {myEpisode.name}
    </div>
  )
}

export default Episode;
