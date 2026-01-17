import React, { useEffect } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // অ্যানিমেশন স্পিড
      once: false,    // এটি false রাখলে স্ক্রল আপ/ডাউন দুইবারই অ্যানিমেশন হবে
      mirror: true,   // এলিমেন্ট পার হওয়ার সময় আবার রিভার্স অ্যানিমেশন হবে
      offset: 120,    // কতটুকু স্ক্রল করলে স্টার্ট হবে
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="about-title" data-aos="fade-down">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left" data-aos="fade-right">
          <img src={profile_image} alt="Sayed Profile" className="sayed" />
        </div>

        <div className="about-right">
          <div className="about-pera" data-aos="fade-left">
            <p>
              I am MD ABU SAYED BIN AMIN, a dedicated Front-End Developer and a final-year Computer Science student. My passion lies in bridging the gap between design and functionality by crafting high-performance, responsive, and user-centric web applications.
              With a deep expertise in React.js and Modern JavaScript (ES6+), I specialize in building interactive UI components that provide seamless user experiences. My technical toolkit includes HTML5, CSS3, Tailwind CSS, and Bootstrap, ensuring every project I build is not only visually stunning but also optimized for speed and SEO.
              As a self-motivated developer, I am committed to writing clean, maintainable code and staying ahead of industry trends. I thrive in collaborative environments and am eager to contribute my skills to innovative projects that deliver meaningful digital solutions.
            </p>
          </div>

          <div className="resume-grid">
            <div className="resume-column">
              <h2 className="column-heading" data-aos="fade-up">Experience</h2>
              <div className="resume-item" data-aos="fade-up">
                <div className="dot"></div>
                <div className="resume-info">
                  <span className="date">Sep 2025 – Dec 2025</span>
                  <h3>Industrial Attachment</h3>
                  <p className="org">European IT Institute</p>
                  <ul className="res-points">
                    <li>Reusable UI with HTML5, CSS3, JS & Bootstrap5</li>
                    <li>React.js state management & components</li>
                    <li>Pixel-perfect & cross-browser compatibility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resume-column">
              <h2 className="column-heading" data-aos="fade-up">Education</h2>
              <div className="resume-item" data-aos="fade-up">
                <div className="dot"></div>
                <div className="resume-info">
                  <span className="date">2021-22 | Expected Feb 2026</span>
                  <h3>Diploma in Engineering (CST)</h3>
                  <p className="org">Thakurgaon Polytechnic Institute</p>
                </div>
              </div>
              <div className="resume-item" data-aos="fade-up">
                <div className="dot"></div>
                <div className="resume-info">
                  <span className="date">2021 | GPA: 4.78</span>
                  <h3>Secondary School Certificate</h3>
                  <p className="org">Kurigram Govt. High School</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cert-section" data-aos="zoom-in-up">
            <h2 className="column-heading">Certification</h2>
            <div className="cert-item">
              <p>🏆 <b>Web Design & Development for Freelancing (Level-3)</b> – National Skill Development Authority (NSDA), Bangladesh.</p>
              <p>🏆 <b>React.js Front-End Development</b> – European IT Institute.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;