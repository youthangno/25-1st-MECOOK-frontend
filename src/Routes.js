import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductCategory from './pages/ProductCategory/ProductCategory';
import Search from './pages/Search/Search';
import Nav from './components/Nav/Nav';
import MyInfo from './pages/MyInfo/MyInfoBox/MyInfoBox';
import Main from './pages/Main/Main';
import MinMenu from './pages/Main/MinMenu/MinMenu';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import BestProduct from './pages/BestProduct/BestProduct';
import SearchResult from './pages/SearchResult/SearchResult';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/product-category" component={ProductCategory} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/minmenu" component={MinMenu} />
          <div>
            <Nav />
            <MyInfo />
            <Route exact path="/" component={Main} />
            <Route exact path="/product-detail" component={ProductDetail} />
            <Route exact path="/best" component={BestProduct} />
            <Route exact path="/search-result" component={SearchResult} />
            <Footer />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
