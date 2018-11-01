import * as React from 'react';
import { Home } from './Home';
import './App.scss';

const logo = require('../images/logo.svg'); // tslint:disable-line

class App extends React.Component<{} , {}> {
  render() {
    return (
      <div  className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Home framework="react" compiler="webpack"/>
      </div>
    );
  }
}

export default App;
