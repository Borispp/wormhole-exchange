import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import routes from './routes.json';

import MainPage from './components/pages/MainPage';

import './styles/core.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path={routes.index} component={MainPage}/>
          </Switch>
        </Router>

        <NotificationContainer />
      </React.Fragment>
    );
  }
}

export default App;
