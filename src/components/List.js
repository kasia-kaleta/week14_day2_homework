import React from 'react';
import Song from './Song.js';

const List = (props) => {
  const songNodes = props.songs.map((song, index) => {
    return(
      <Song key={index} artist={song['im:artist']} title={song['im:name']}></Song>
    );
  })



  return(
    <>
    <h2> List: </h2>
    {songNodes}
    </>
  );
}


export default List;
