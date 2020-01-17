import React, { Component } from 'react';

class SearchBar extends Component {

    state = { value: null };
    
    onChange = e => {
        this.setState({ value: e.target.value.toUpperCase() });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar; 