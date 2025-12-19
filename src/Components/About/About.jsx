import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/about.jpg";


const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="about-sections">
<div className="about-left">
    <img src={profile_image} alt="" className="sayed" />
</div>

        <div className="about-right">
          <div className="about-pera">
            <p>
              I am MD ABU SAYED BIN AMIN, a final-year Diploma student in
              Computer Science and Technology (CST) at Thakurgaon Polytechnic
              Institute, currently in my 8th semester. I have completed my React
              learning and am actively seeking opportunities as a Front-End
              Developer. I possess strong hands-on knowledge of HTML, CSS,
              Bootstrap, JavaScript, React, and Git, which enables me to design
              and develop responsive, modern, and user-friendly web
              applications. I am passionate about web development,
              self-motivated, and constantly eager to learn new technologies. 
            </p>
            <p>
              I
              have experience in building interactive UI components, optimizing
              website performance, and ensuring cross-browser compatibility. My
              goal is to work in a professional environment where I can apply my
              front-end skills, gain practical experience, and grow as a
              successful web developer. In addition, I have problem-solving
              abilities, attention to detail, and a collaborative mindset, which
              allow me to work effectively both independently and as part of a
              team. I am committed to writing clean, maintainable code and
              continuously improving my skills to keep up with the latest trends
              in web development. I aim to contribute to innovative projects
              that provide seamless user experiences and make a meaningful
              impact in the digital world.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievments">
        <div className="about-achievment">
          <h1>1+</h1>
          <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>30+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>50+</h1>
          <p>Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default About;
