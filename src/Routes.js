import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import MyInfo from './pages/';
import ProductCategory from './pages/ProductCategory/ProductCategory';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Search from './pages/Search/Search';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <MyInfo />
        <Switch>
          <Route exact path="/product-category" component={ProductCategory} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product-detail/:id" component={ProductDetail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
