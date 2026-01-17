import React, { useState } from 'react';
import './Service.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services_data = [
    {
      s_no: "01",
      s_name: "Responsive Web Design",
      s_desc: "Creating websites that look great on all devices, from mobile to desktop.",
      features: ["Mobile-first Approach", "Fluid Grids", "Flexible Images", "Cross-browser Testing"]
    },
    {
      s_no: "02",
      s_name: "UI/UX Design",
      s_desc: "Designing clean, modern, and user-friendly interfaces.",
      features: ["Wireframing", "User Personas", "Visual Hierarchy", "Prototyping"]
    },
    {
      s_no: "03",
      s_name: "JavaScript Development",
      s_desc: "Adding dynamic features like forms and real-time updates.",
      features: ["ES6+ Syntax", "DOM Manipulation", "Async Programming", "Event Handling"]
    },
    {
      s_no: "04",
      s_name: "React Development",
      s_desc: "Building component-based single-page applications.",
      features: ["Hooks & State", "Component Reusability", "React Router", "Context API"]
    },
    {
      s_no: "05",
      s_name: "API Integration",
      s_desc: "Fetching and displaying data from external APIs.",
      features: ["Axios/Fetch", "JSON Handling", "Error Handling", "Data Mapping"]
    },
    {
      s_no: "06",
      s_name: "Version Control",
      s_desc: "Managing project versions and collaborating with Git.",
      features: ["Branching", "Merge Conflicts", "GitHub Actions", "Pull Requests"]
    }
  ];

  return (
    <div className="service" id='service'>
      <div className="service-title" data-aos="fade-down">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="service-container">
        {services_data.map((element, index) => (
          <div 
            key={index} 
            className="service-format"
            data-aos="fade-up" 
            data-aos-delay={index * 100}
            onClick={() => setSelectedService(element)}
          >
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
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedService(null)}>&times;</button>
            <span className="modal-no">{selectedService.s_no}</span>
            <h2>{selectedService.s_name}</h2>
            <p>{selectedService.s_desc}</p>
            <div className="modal-features">
              <h4>Key Features:</h4>
              <ul>
                {selectedService.features.map((feature, i) => (
                  <li key={i}>✦ {feature}</li>
                ))}
              </ul>
            </div>
            <button className="modal-btn" onClick={() => setSelectedService(null)}>Got it</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;