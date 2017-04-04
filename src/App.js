import React, { Component } from 'react';
import Counter1 from './containers/counter1'
import Counter2 from './containers/counter2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter1/>
        <Counter2/>
        <img src='favicon.ico'></img>
      </div>
    );
  }
}

export default App;
