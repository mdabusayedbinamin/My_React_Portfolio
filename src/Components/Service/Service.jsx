import React from 'react';
import './Service.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Service = () => {
  return (
    <div className="service" id='service'>
      <div className="service-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="service-container">
        {services_data.map((element, index) => (
          <div key={index} className="service-format">
            <h3>{element.s_no}</h3>
            <h2>{element.s_name}</h2>
            <p>{element.s_desc}</p>

            <div className="service-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
