import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Alert from './components/utils/Alert'
import './styles/main.sass'
import HomeView from './components/views/HomeView';


class App extends Component {
  render() {
    return (
      <div>
        <Alert />
        <Switch>
          <Route path="/" exact component={HomeView} />
          {
            // TODO: 404 view
          }
        </Switch>
      </div>
    );
  }
}

export default App;
