import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services/Services';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title='explore' subtitle='cozy apartments starting at €40'>
          <Link to='/suites' className='btn-primary'>
            check apartments
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
}
