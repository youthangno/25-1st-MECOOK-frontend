import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import ProductCategory from './pages/ProductCategory/ProductCategory';
import Main from './pages/Main/Main';
import MinMenu from './pages/Main/MinMenu/MinMenu';
import Nreview from './pages/Review/Nreview';
import BestProduct from './pages/BestProduct/BestProduct';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Search from './pages/Search/Search';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/product-category" component={ProductCategory} />
          <Route exact path="/" component={Main} />
          <Route exact path="/minmenu" component={MinMenu} />
          <Route exact path="/review" component={Nreview} />
          <Route exact path="/best" component={BestProduct} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/search" component={Search} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
