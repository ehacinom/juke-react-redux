import React from 'react';
import Songs from '../components/Songs';
import SongsContainer from '../containers/SongsContainer'

export default function Album (props) {

  const album = props.selectedAlbum;

  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail"/>
      </div>
      <SongsContainer />
    </div>
  );

}