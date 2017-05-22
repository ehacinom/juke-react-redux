import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import Stations from '../components/Stations';

const convertSongsToStations = function (songs) {
    // reduce to obj
    let obj = songs.reduce((stations, song) => {
        stations[song.genre] 
            ? stations[song.genre].push(song)
            : stations[song.genre] = [song];
        return stations
    }, {});
    
    // return an array of genres
    return Object.keys(obj).map(name => ({name: name, songs: obj[name]}));
};

const mapStateToProps = function (state) {    
    return {
        stations: convertSongsToStations(state.songs)
    }
}



const mapDispatchToProps = function (dispatch) {
    return {
        
    }
}

const StationsContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Stations);
export default StationsContainer;