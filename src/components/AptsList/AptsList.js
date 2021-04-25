import React from 'react';
import Apartment from '../Apartment/Apartment';

export default function AptList({ apartments }) {
  if (apartments.length === 0) {
    return (
      <div className='empty-search'>
        <h3>There is no any apartment matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className='apartmentsList'>
      <div className='apartmentsList-center'>
        {apartments.map((item) => {
          return <Apartment key={item.id} apartment={item} />;
        })}
      </div>
    </section>
  );
}
