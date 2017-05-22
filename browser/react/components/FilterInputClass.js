import FilterInput from './FilterInput';
import Artists from './Artists';
import React from 'react';

class FilterInputClass extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    
    render () {
        const inputValue = this.state.inputValue;
        const filteredArtists = this
            .props
            .artists
            .filter(artist => artist.name.match(inputValue));
            
        return (
            <div>
            <FilterInput 
                handleChange={this.handleChange}
                inputValue={inputValue}
            />
            <Artists artists={filteredArtists} />
            </div>
        );
    }
}

export default FilterInputClass;