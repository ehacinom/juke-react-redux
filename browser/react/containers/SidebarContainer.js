import {connect} from 'react-redux';
import Sidebar from '../components/Sidebar';


const mapStateToProps = function (state) {
    return {
        playlists: state.playlists.list
    }
}
const mapDispatchToProps = (dispatch) => ({});

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;
