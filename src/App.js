import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Alert from './components/utils/Alert';
import './styles/main.sass';
import HomeView from './components/views/HomeView';
import LoginView from './components/views/LoginView';
import SignupView from './components/views/SignupView';
import PrivateRoute from './components/utils/PrivateRoute';
import SettingsView from './components/views/SettingsView';
import WorkoutsView from './components/views/WorkoutsView';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Alert />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/login" exact component={LoginView} />
          <Route path="/signup" exact component={SignupView} />
          <PrivateRoute path="/settings" exact component={SettingsView} />
          <PrivateRoute path="/workouts" exact component={WorkoutsView} />
          {
            // TODO: 404 view
          }
        </Switch>
      </div>
    );
  }
}
