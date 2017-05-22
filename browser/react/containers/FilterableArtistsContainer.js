import FilterInputClass from '../components/FilterInputClass';
import {connect} from 'react-redux';

const mapStateToProps = function (state) {
    return {
        artists: state.artists.list
    }
}
const mapDispatchToProps = dispatch => ({});

const FilterableArtistsContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(FilterInputClass);
export default FilterableArtistsContainer;
