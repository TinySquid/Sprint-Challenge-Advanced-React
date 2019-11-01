import React from 'react';
import Display from './components/Display';

import './App.css';

class App extends React.Component {
  state = {};

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="app">
        {this.state ? console.log(this.state) : null}
      </div>
    )
  }
}

export default App;
