import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            message: null
        };
    }

    render() {
        
        return (
            <div>
                <Spinner />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));