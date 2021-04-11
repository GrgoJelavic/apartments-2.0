import React, { Component } from 'react';
import items from '../data';

const ApartmentContext = React.createContext();

class ApartmentProvider extends Component {
  state = {
    apartments: [],
    sorted: [],
    featuredApts: [],
    loading: true,
  };

  // getData

  componentDidMount() {
    // this.getData
    let apartments = this.formatData(items);

    let featuredApts = apartments.filter((apt) => apt.featured === true);

    this.setState({
      apartments,
      featuredApts,
      sortedApts: apartments,
      loading: false,
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
  render() {
    return (
      <ApartmentContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ApartmentContext.Provider>
    );
  }
}

const ApartmentConsumer = ApartmentContext.Consumer;

export { ApartmentProvider, ApartmentConsumer, ApartmentContext };
