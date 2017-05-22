import {connect} from 'react-redux';
import LyricsForm from '../components/LyricsForm'
import {searchLyrics} from '../action-creators/lyrics';


const mapStateToProps = function (state) {
    return {
        text: state.lyrics.text
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        searchLyrics (artist, song) {
            dispatch(searchLyrics(artist, song));
        } 
    }
}

const LyricsContainer = connect(mapStateToProps, mapDispatchToProps)(LyricsForm);
export default LyricsContainer;

