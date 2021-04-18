import React, { Component } from 'react';
import defaultBcg from '../images/split-1.jpg';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import { ApartmentContext } from '../Context/Context';
import StyledHero from '../components/StyledHero/StyledHero';
export default class ApartmentPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
    //console.log(this.state);
  }

  static contextType = ApartmentContext;

  componentDidMount() {}

  render() {
    const { getApartment } = this.context;
    const apartment = getApartment(this.state.slug);
    console.log(apartment);

    if (!apartment) {
      return (
        <div className='error'>
          <h3>Apartment not found</h3>
          <Link to='/apartments' className='btn-primary'>
            Back To Apartments
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      bedroomsNo,
      bedsNo,
      bathsNo1,
      pets,
      breakfast,
      featured,
      images,
      type,
    } = apartment;

    const [mainImg, ...defaultImgs] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to='/apartments' className='btn-primary'>
              back to apartments
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-apartment'>
          <div className='single-apartment-images'>
            {defaultImgs.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className='single-apartment-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6>price : from {price}€</h6>
              <h6>size : {size} m2</h6>
              <h6>type : {type} apartment</h6>
              <h6>
                max capacity : {capacity > 1 ? `${capacity} people` : `person`}{' '}
              </h6>
            </article>
          </div>
        </section>
      </>
    );
  }
}
