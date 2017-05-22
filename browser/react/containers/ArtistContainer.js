import Artist from '../components/Artist';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';


const mapStateToProps = function (state, props) {
    console.log('ArtistContainer', props)
    return {
        selectedArtist: state.artists.selected,
        children: props.children,
    }
}
const mapDispatchToProps = function (dispatch) {
    return {
        toggleOne: (song, list) =>  dispatch(toggleSong(song, list))
    }
}
const ArtistContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Artist);
export default ArtistContainer;
