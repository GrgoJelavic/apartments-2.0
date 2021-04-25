import React, { Component } from 'react';
import items from '../data';

const ApartmentContext = React.createContext();

class ApartmentProvider extends Component {
  state = {
    apartments: [],
    sortedApts: [],
    featuredApts: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minSize: 0,
    maxSize: 0,
    minPrice: 0,
    maxPrice: 0,
    parking: false,
    pets: false,
  };

  // getData

  componentDidMount() {
    // this.getData
    let apartments = this.formatData(items);

    let featuredApts = apartments.filter((apt) => apt.featured === true);

    let maxPrice = Math.max(...apartments.map((item) => item.price));

    let maxSize = Math.max(...apartments.map((item) => item.size));

    this.setState({
      apartments,
      featuredApts,
      sortedApts: apartments,
      loading: false,
      price: maxPrice,
      maxPrice,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let apartment = { ...item.fields, images, id };
      return apartment;
    });
    return tempItems;
  }

  getApartment = (slug) => {
    let tempApts = [...this.state.apartments];

    const apartment = tempApts.find((apt) => apt.slug === slug);

    return apartment;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = event.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;

    this.setState({ [name]: value }, this.filterApartments);
  };

  filterApartments = () => {
    let {
      apartments,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      minPrice,
      maxPrice,
      parking,
      pets,
    } = this.state;
    // all the apartments
    let tempApartments = [...apartments];
    // transform values
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== 'all')
      tempApartments = tempApartments.filter((apt) => apt.type === type);

    //filter by capacity
    tempApartments = tempApartments.filter((apt) => apt.capacity >= capacity);

    // filter by price
    tempApartments = tempApartments.filter((apt) => apt.price < price);

    // change state
    this.setState({ sortedApts: tempApartments });
  };

  render() {
    return (
      <ApartmentContext.Provider
        value={{
          ...this.state,
          getApartment: this.getApartment,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ApartmentContext.Provider>
    );
  }
}

const ApartmentConsumer = ApartmentContext.Consumer;

export function withApartmentConsumer(Component) {
  return function consumerWrapper(props) {
    return (
      <ApartmentConsumer>
        {(value) => <Component {...props} context={value} />}
      </ApartmentConsumer>
    );
  };
}

export { ApartmentProvider, ApartmentConsumer, ApartmentContext };
