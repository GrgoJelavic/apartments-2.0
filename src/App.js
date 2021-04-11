import React from 'react';
import './App.css';

import Home from './pages/HomePage';
import Apartments from './pages/ApartmentsPage';
import Apartment from './pages/ApartmentPage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import Error from './pages/ErrorPage';
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
