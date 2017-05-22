import {connect} from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = function (state) {
    return {
        albums: state.albums.list
    }
}
const mapDispatchToProps = dispatch => ({});

const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);
export default AlbumsContainer;
