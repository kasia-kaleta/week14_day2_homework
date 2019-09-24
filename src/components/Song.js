import React from 'react';

const Song = (props) => {
  return(
    <>

    <h3>Artist: {props.artist.label}</h3>
    <h3>Title: {props.title.label}</h3>
    <h3>Position on the chart: </h3>

    </>
  )

}



export default Song;
