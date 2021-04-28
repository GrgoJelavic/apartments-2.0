import React from 'react';
import { useContext } from 'react';
import { ApartmentContext } from '../../Context/Context';
import Title from '../../components/Title/Title';

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function AptFilter({ apartments }) {
  const context = useContext(ApartmentContext);
  console.log(context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    parking,
    pets,
  } = context;

  // get unique types
  let types = getUnique(apartments, 'type');
  // add all
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // let guests = getUnique(apartments, 'capacity');
  // guests = guests.map((item, index) => {
  //   return (
  //     <option key={index} value={item}>
  //       {item}
  //     </option>
  //   );
  // });

  return (
    <section className='filter-container'>
      <Title title='search apartments' />
      <form className='filter-form'>
        {/*select type*/}
        <div className='form-group'>
          <label htmlFor='type'>Apartment type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*end of select type*/}
        {/*select guests*/}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests: {capacity} </label>
          <input
            type='range'
            name='capacity'
            id='capacity'
            min='1'
            max='9'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          />
        </div>
        {/*end of select guests*/}
        {/*select price*/}
        <div className='form-group'>
          <label htmlFor='price'>Nightly rate: {price}€ </label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            className='form-control'
            onChange={handleChange}
          />
        </div>
        {/*end of select price */}
        {/*select size*/}
        <div className='form-group'>
          <label htmlFor='size'>Size (m²)</label>
          <div className='size-inputs'>
            <input
              className='size-input'
              type='number'
              name='minSize'
              value={minSize}
              id='size'
              onChange={handleChange}
              min='0'
            />
            <input
              className='size-input'
              type='number'
              name='maxSize'
              value={maxSize}
              id='size'
              onChange={handleChange}
              min='0'
            />
          </div>
        </div>
        {/*end of select size*/}
        {/*select extras*/}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='parking'
              id='parking'
              checked={parking}
              onChange={handleChange}
            />
            <label htmlFor='parking'>parking</label>
          </div>

          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/*end of select extras */}
      </form>
    </section>
  );
}
