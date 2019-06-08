import React from 'react';

import DesignDevelopment from '../../media/pencil-ruler-solid.svg';
import ServerHosting from '../../media/server-solid.svg';
import BlueBar from '../BlueBar';
import './Solutions.css';

const getService = (img, title, text) => {
  return (
    <div className="service section-item">
      <div className="service-title">
        <span className="service-image image-border">
          <img src={img} alt={title} />
        </span>
        <h1>{title}</h1>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default () => {
  return (
    <div id="solutions">
      <BlueBar />
      <div className="section-title">What do we offer?</div>

      <section>
        {getService(
          DesignDevelopment,
          'Design & Development',
          'Unlike cookie-cutter website builders, we design and develop your website from the ground up. This allows us to create exactly what you have in mind.'
        )}

        {getService(
          ServerHosting,
          'Website Hosting',
          'Not tech-savvy? No problem. We can handle hosting your website to ensure it is online 24/7 to convert visitors into customers.'
        )}
      </section>
    </div>
  );
};
