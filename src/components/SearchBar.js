import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSearchSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment" style={{marginTop: '1rem'}}>
                <form onSubmit={this.onFormSubmit} className="ui form"> 
                    <div className="filed">
                        <label htmlFor="videoSearch">Video Search</label>
                        <input 
                        id="videoSearch" 
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;