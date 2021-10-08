import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Review from './pages/Review/Review';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/review" component={Review} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
