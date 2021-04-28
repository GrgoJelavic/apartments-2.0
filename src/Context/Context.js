import React, { Component } from 'react';
//import items from '../data';
import Client from '../Contentful';
Client.getEntries({ content_type: 'apartment' }).then((response) =>
  console.log(response.items)
);

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
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'apartment',
        //order: 'sys.createdAt',
        order: 'fields.price',
      });
      let apartments = this.formatData(response.items);

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
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;

    console.log(target, value, target.type);
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
      // minPrice,
      // maxPrice,
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
    if (capacity !== 1)
      tempApartments = tempApartments.filter((apt) => apt.capacity >= capacity);

    // filter by price
    tempApartments = tempApartments.filter((apt) => apt.price <= price);

    //filter by size
    tempApartments = tempApartments.filter(
      (apt) => apt.size >= minSize && apt.size <= maxSize
    );

    // filter by parking
    if (parking)
      tempApartments = tempApartments.filter((apt) => apt.parking === true);

    // filter by pets
    if (pets)
      tempApartments = tempApartments.filter((apt) => apt.pets === true);

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
