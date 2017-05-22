import {connect} from 'react-redux';
import Songs from '../components/Songs';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function (state) {
    console.log('state in songs container', state);
    return {
        isPlaying: state.player.isPlaying,
        currentSong: state.player.currentSong,
        songs: state.player.currentSongList
    }
}
const mapDispatchToProps = function (dispatch) {
    return {
        toggleOne: (song, list) => dispatch(toggleSong(song, list)),
    }
}
const SongsContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Songs);

export default SongsContainer;