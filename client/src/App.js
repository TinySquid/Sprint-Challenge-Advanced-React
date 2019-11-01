import React from 'react';

import Theme from './components/Theme';
import PopularityChart from './components/PopularityChart';
import Display from './components/Display';

import './App.css';

class App extends React.Component {
  state = {
    dataSet: []
  };

  //Get API data on mount
  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(data => {
        this.setState({ dataSet: data });
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="app">
        <Theme />
        <PopularityChart data={this.state.dataSet.slice(0, 10)} />
        <Display data={this.state.dataSet} />

      </div>
    )
  }
}

export default App;
