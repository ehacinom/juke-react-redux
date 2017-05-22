import React from 'react';
import {connect} from 'react-redux';
import Stations from '../components/Stations';
import {convertSongsToStations} from '../utils';

const mapStateToProps = function (state) {    
    return {
        stations: convertSongsToStations(state.songs)
    }
}

const mapDispatchToProps = dispatch => ({});

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);
export default StationsContainer;