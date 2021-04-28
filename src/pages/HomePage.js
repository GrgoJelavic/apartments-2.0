import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services/Services';
import FeaturedApts from '../components/FeaturedApts/FeaturedApts';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title='welcome' subtitle='check out our cozy apartments'>
          <Link to='/apartments' className='btn-primary'>
            Explore
          </Link>
        </Banner>
      </Hero>
      <FeaturedApts />
      <Services />
      <Footer />
    </>
  );
}
