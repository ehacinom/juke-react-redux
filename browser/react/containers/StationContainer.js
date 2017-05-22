import React from 'react';
import store from '../store';
import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSongsToStations, convertSong} from '../utils';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function (state, props) {
    const station = props.routeParams.station;
    return {
        station: station,
        currentSong: state.player.currentSong,
        songs: state.songs.filter(song => song.genre === station).map(convertSong),
        isPlaying: state.player.isPlaying,
    }
}

const mapDispatchToProps = function (dispatch, props) {
    return {
        toggle: (song, list) => dispatch(toggleSong(song, list))
    }
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;