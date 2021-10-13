import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import BestProduct from './pages/BestProduct/BestProduct';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/best" component={BestProduct} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
