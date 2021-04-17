import React, { Component } from 'react';
import defaultBcg from '../images/apartments/pomalo2.jpg';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import { ApartmentContext } from '../Context/Context';
export default class ApartmentPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }

  static contextType = ApartmentContext;

  // componentDidMount() {}

  render() {
    const { getApartment } = this.context;
    const apartment = getApartment(this.state.slug);
    console.log(apartment);
    console.log(this.context);

    if (!apartment) {
      return (
        <div className='error'>
          <h3>Page can not be find</h3>
          <Link to='/suites' className='btn-primary'></Link>
        </div>
      );
    }
    return <div>Hello from single apartment page</div>;
  }
}
