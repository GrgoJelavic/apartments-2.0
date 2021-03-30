import React, { Component } from 'react';
import Title from '../Title/Title';
import {
  FaCity,
  FaShuttleVan,
  FaSwimmer,
  FaUmbrellaBeach,
} from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCity />,
        title: 'comfortable suites in the city center',
        info:
          'Lorem ipsus moment odas da safe, plei asento di mare po ki dinare vici veneto spalato.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'private transfers',
        info:
          'Lorem ipsus moment odas da safe, plei asento di mare po ki dinare vici veneto spalato.',
      },
      {
        icon: <FaUmbrellaBeach />,
        title: 'explore beachs',
        info:
          'Lorem ipsus moment odas da safe, plei asento di mare po ki dinare vici veneto spalato.',
      },
      {
        icon: <FaSwimmer />,
        title: 'swimmers swim',
        info:
          'Lorem ipsus moment odas da safe, plei asento di mare po ki dinare vici veneto spalato.',
      },
    ],
  };

  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
