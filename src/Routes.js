import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductCategory from './pages/ProductCategory/ProductCategory';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/product-category" component={ProductCategory} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
