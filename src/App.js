import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Alert from './components/utils/Alert';
import './styles/main.sass';
import HomeView from './components/views/HomeView';
import LoginView from './components/views/LoginView';


class App extends Component {
  render() {
    return (
      <div>
        <Alert />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/login" exact component={LoginView} />
          {
            // TODO: 404 view
          }
        </Switch>
      </div>
    );
  }
}

export default App;
