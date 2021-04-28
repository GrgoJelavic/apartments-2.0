import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import ApartmentsContainer from '../components/AptsContainer/AptsContainer';
import Footer from '../components/Footer/Footer';

const Apartments = () => {
  return (
    <>
      <Hero hero='apartmentsHero'>
        <Banner title='our cozy apartments'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <ApartmentsContainer />
      <Footer />
    </>
  );
};

export default Apartments;
