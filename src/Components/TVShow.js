import React from 'react';

const tvShow = (props) => {
  return (
    <div>
      <br/>
      <img src={props.show.image.medium} onClick={() => props.selectShow(props.show)} alt=""/>
    </div>
    
  );
}

tvShow.defaultProps = {
  show: {
    medium: "http://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg"
  }
}
export default tvShow;
