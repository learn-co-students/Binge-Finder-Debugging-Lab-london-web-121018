import React from 'react';

const tvShow = (props) => {
  return (
    <div>
      <br/>
      <img src={props.shows.image.medium} onClick={props.selectShow} alt=""/>

    </div>
  );
}

export default tvShow;
