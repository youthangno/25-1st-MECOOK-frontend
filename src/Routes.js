import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MyInfo from './pages/MyInfo/TestPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/my-info" component={MyInfo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
