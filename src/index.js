import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    render() {
        return <div>up and running. what do we need now?</div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
