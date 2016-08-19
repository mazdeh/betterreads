import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function fetchBooks() {
  fetch('http://localhost:3000/books')
    .then((response) => response.json())
    .then((response) => {
      console.log('items: ', response);
    });
}

export default class App extends Component {
    render() {
      fetchBooks();
        return <div>up and running. what do we need now?</div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
