// import React, {Component} from 'react';
// import store from '../store';
import {connect} from 'react-redux';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function (state) {
    return {
        playlist: state.playlists.selected,
        isPlaying: state.playlists.isPlaying,
        currentSong: state.playlists.currentSong,
        songs: state.playlists.songs,
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        toggleOne: (song, list) => dispatch(toggleSong(song, list))
    }
}

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(Playlist)
export default PlaylistContainer;
