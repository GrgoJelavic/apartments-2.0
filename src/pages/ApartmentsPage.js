import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';

const Apartments = () => {
  return (
    <Hero hero='roomsHero'>
      <Banner title='our apartments'>
        <Link to='/' className='btn-primary'>
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Apartments;