// import React, {Component} from 'react';
// import store from '../store';
import {connect} from 'react-redux';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

// class AlbumContainer extends Component {
//
//   constructor() {
//     super();
//     this.state = store.getState();
//   }
//
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }
//
//   render() {
//     return <Album
//       selectedAlbum={this.state.albums.selected}
//       currentSong={this.state.player.currentSong}
//       isPlaying={this.state.player.isPlaying}
//       toggleOne={this.toggle}
//     />;
//   }
//
// }

const mapStateToProps = function (state) {
    return {
        selectedAlbum: state.albums.selected,
        currentSong: state.player.currentSong,
        isPlaying: state.player.isPlaying
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        toggleOne: (song, list) => dispatch(toggleSong(song, list))
    }
}

const AlbumContainer = connect(mapStateToProps, mapDispatchToProps)(Album);
export default AlbumContainer;
