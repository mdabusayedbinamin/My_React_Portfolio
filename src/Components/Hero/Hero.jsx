import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/update_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowServices(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero" id="home">
      <img
        src={profile_img}
        alt="profile"
        className="hero-img"
        data-aos="zoom-in"
        data-aos-duration="1200"
      />

      <h1 data-aos="fade-down" data-aos-delay="300">
        <Typewriter
          words={["I'm MD ABU SAYED,"]}
          loop={2}
          cursor
          cursorStyle="|"
          typeSpeed={120}
        />
      </h1>

      <div className="hero-typing-box">
        {showServices && (
          <h2 data-aos="fade-in">
            <Typewriter
              words={[
                "Frontend Developer",
                "UI/UX Design",
                "Responsive Websites",
                "React JS Development",
                "Performance Optimization",
              ]}
              loop={50}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
        )}
      </div>

      <p className="hero-description" data-aos="fade-up" data-aos-delay="600">
        I am <b>MD ABU SAYED BIN AMIN</b>, a dedicated Front-End Developer. 
        I specialize in building responsive, modern, and user-friendly web 
        applications using <span>React, JavaScript, and UI/UX best practices.</span>
      </p>

      <div className="hero-action">
        <div className="hero-connect" data-aos="fade-right" data-aos-delay="900">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume" data-aos="fade-left" data-aos-delay="900">
          <a
            href="SAYED_Resume.pdf"
            target="_blank"
            download="MD_ABU_SAYED_Resume.pdf"
          >
            My Resume
          </a>
        </div>
      </div>
    
    </div>
  );
};

export default Hero;