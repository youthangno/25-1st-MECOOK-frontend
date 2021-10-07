import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ProductCategory from './pages/ProductCategory/ProductCategory';

// page가 아닌 컴포넌트이므로 추후 삭제 예정
import TestPage from './pages/MyInfo/TestPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product-category" component={ProductCategory} />
          <Route exact path="/my-info" component={TestPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
