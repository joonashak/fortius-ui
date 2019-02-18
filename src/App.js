import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Alert from './components/utils/Alert';
import './styles/main.sass';
import HomeView from './components/views/HomeView';
import LoginView from './components/views/LoginView';
import SignupView from './components/views/SignupView';
import PrivateRoute from './components/utils/PrivateRoute';
import SettingsView from './components/views/SettingsView';


class App extends Component {
  render() {
    return (
      <div>
        <Alert />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/login" exact component={LoginView} />
          <Route path="/signup" exact component={SignupView} />
          <PrivateRoute path="/settings" exact component={SettingsView} />
          {
            // TODO: 404 view
          }
        </Switch>
      </div>
    );
  }
}

export default App;
