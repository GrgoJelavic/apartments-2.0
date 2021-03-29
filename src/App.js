import React from 'react';
import './App.css';

import Home from './pages/Home';
import Apartments from './pages/Apartments';
import Apartment from './pages/Apartment';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Home></Home>
      <Apartments></Apartments>
      <Apartment></Apartment>
      <Contact></Contact>
      <About></About>
      <Error></Error>
    </>
  );
}

export default App;
