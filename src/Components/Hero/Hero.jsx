import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/update_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowServices(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero " id="home">
      <img src={profile_img} alt="profile" className="hero-img" />

      <h1>
        <Typewriter
          words={["I'm MD ABU SAYED,"]}
          loop={2}
          cursor
          cursorStyle=""
          typeSpeed={120}
        />
      </h1>
      {showServices && (
        <h2>
          <Typewriter
            words={[
              "Frontend Developer",
              "UI/UX Design",
              "Responsive Websites",
              "React JS Development",
              "Performance Optimization",
            ]}
            loop={50}
            cursorStyle=""
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      )}

      <p>
        I am MD ABU SAYED BIN AMIN,I have completed my React learning and am
        now actively seeking opportunities as a Front-End Developer. I have
        strong hands-on knowledge of HTML, CSS, Bootstrap, JavaScript, React,
        and , which enables me to design and develop responsive, modern, and
        userfriendly web applications. 
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
