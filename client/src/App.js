import React from 'react';
import Display from './components/Display';

import './App.css';

class App extends React.Component {
  state = {
    dataSet: []
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(data => this.setState({ dataSet: data }))
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="app">
        <Display data={this.state.dataSet} />
      </div>
    )
  }
}

export default App;
