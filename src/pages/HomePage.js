import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services/Services';
import FeaturedApts from '../components/FeaturedApts/FeaturedApts';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title='welcome' subtitle='check out 05cozy apartments'>
          <Link to='/suites' className='btn-primary'>
            Explore
          </Link>
        </Banner>
      </Hero>
      <FeaturedApts />
      <Services />
    </>
  );
}
