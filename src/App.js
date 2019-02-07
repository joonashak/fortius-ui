import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Alert from './components/utils/Alert'


const HelloWorld = () => <h1>Hello, World!</h1>

class App extends Component {
  render() {
    return (
      <div>
        <Alert />
        <Switch>
          <Route path="/login" component={HelloWorld} />
        </Switch>
      </div>
    );
  }
}

export default App;
