import React, { Component } from 'react';
import { ApartmentContext } from '../../Context/Context';
import Loading from '../Loading/Loading';
import Apartment from '../Apartment/Apartment';
import Title from '../Title/Title';

export default class FeaturedApts extends Component {
  static contextType = ApartmentContext;

  render() {
    let { loading, featuredApts: apartments } = this.context;

    console.log(apartments);

    apartments = apartments.map((apt) => {
      return <Apartment key={apt.id} apartment={apt} />;
    });

    return (
      <section className='featured-apartments'>
        <Title title='featured ' />
        <div className='featured-apartments-center'>
          {loading ? <Loading /> : apartments}
        </div>
      </section>
    );
  }
}
