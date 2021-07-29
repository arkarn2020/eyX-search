// ext
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// int
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Products from './screens/Products';

// screen routes
/* ***********
 * Home = /   (always)
 * Products = /products  (Link from navbar)
 *
 */

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
