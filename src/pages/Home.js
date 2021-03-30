import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Hero>
      <Banner
        title='finest apartments'
        subtitle='comfortable apartments starting at €40'
      >
        <Link to='/suites' className='btn-primary'>
          Our apartments
        </Link>
      </Banner>
    </Hero>
  );
}
