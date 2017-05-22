import NewPlaylistForm from '../components/NewPlaylistForm';
import {connect} from 'react-redux';
import {addNewPlaylist} from '../action-creators/playlists';


const mapStateToProps = function (state) {
    return {
        
    }
}
const mapDispatchToProps = function (dispatch) {
    return {
        addNewPlaylist: (name) => dispatch(addNewPlaylist(name))
    }
}

const NewPlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(NewPlaylistForm);
export default NewPlaylistContainer;
