import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Review2 from './pages/Review/Review2';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/review" component={Review2} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
