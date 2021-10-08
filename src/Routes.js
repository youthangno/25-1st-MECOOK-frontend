import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import MinMenu from './pages/Main/MinMenu/MinMenu';
import Review from './pages/Review/Review';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/minmenu" component={MinMenu} />
          <Route exact path="/review" component={Review} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
