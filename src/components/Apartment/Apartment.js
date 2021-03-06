import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../images/apartments/kings1.jpg';
import PropTypes from 'prop-types';

export default function Apartment({ apartment }) {
  const {
    name,
    slug,
    images,
    price,
    capacity,
    bedroomsNo,
    bedsNo,
    size,
  } = apartment;

  return (
    <article className='apartment'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='apartment'></img>
        <div className='price-top'>
          <p>from</p>
          <h6>{price}€</h6>
          <p>per night</p>
        </div>
        <Link to={`/apartments/${slug}`} className='btn-primary apartment-link'>
          Explore
        </Link>
      </div>
      <div className='apartment-info'>
        <h6>{name}</h6>
        <p>{capacity} guests</p>
        <p>
          {bedroomsNo} bedroom - {bedsNo} beds
        </p>
        <p>size: {size} m2</p>
      </div>
    </article>
  );
}

// eslint-disable-next-line react/no-typos
Apartment.propTypes = {
  apartment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    bedroomsNo: PropTypes.number.isRequired,
    bedsNo: PropTypes.number.isRequired,
    bathsNo: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
  }),
};
