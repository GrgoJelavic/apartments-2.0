import React from 'react';
import './App.css';

import Home from './pages/Home';
import Apartments from './pages/Apartments';
import Apartment from './pages/Apartment';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/suites/' component={Apartments} />
        <Route exact path='/suites/:slug' component={Apartment} />
        <Route exact path='/contact/' component={Contact} />
        <Route exact path='/about/' component={About} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
