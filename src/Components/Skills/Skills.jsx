import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      points: [
        "Clean, semantic, and SEO-friendly pages.",
        "Structuring forms, tables, and media elements.",
        "Modern HTML5 tags and best practices.",
        "Accessible (A11y) and well-structured markup."
      ]
    },
    {
      id: 2,
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      points: [
        "Expert in Flexbox and CSS Grid layouts.",
        "Smooth animations and keyframe effects.",
        "Responsive design with Media Queries.",
        "Styled components and modern UI trends."
      ]
    },
    {
      id: 3,
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      points: [
        "ES6+ features and logical programming.",
        "DOM manipulation and event handling.",
        "API integration with Fetch/Async-Await.",
        "Dynamic UI updates and interactivity."
      ]
    },
    {
      id: 4,
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      points: [
        "Component-based architecture and SPA.",
        "State management using Hooks (useState, useEffect).",
        "React Router for seamless navigation.",
        "Efficient rendering and performance tuning."
      ]
    },
    {
      id: 5,
      name: "Bootstrap/Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      points: [
        "Rapid UI development using utility classes.",
        "Mobile-first responsive design approach.",
        "Customizing themes and components.",
        "Modern grid systems and utility-first CSS."
      ]
    },
    {
      id: 6,
      name: "Git & GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      points: [
        "Version control and branch management.",
        "Collaborative workflow with Pull Requests.",
        "Code hosting and open-source contributions.",
        "Command line proficiency and Git commands."
      ]
    }
  ];

  return (
    <div className="skills-section-wrapper" id="skills">
      <div className="skills-title" data-aos="fade-down">
        <h1>My Expertise</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="stacking-container">
        {skillsData.map((skill, index) => (
          <div 
            className="skill-stack-card" 
            key={skill.id}
            style={{ top: `${100 + index * 40}px` }}
          >
            <div className="card-content">
              <div className="card-left">
                <div className="icon-wrapper">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <h3>{skill.name}</h3>
              </div>
              <div className="card-right">
                <ul className="modern-points">
                  {skill.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="glow-effect"></div>
          </div>
        ))}
      </div>
            <div className="about-achievments" data-aos="fade-up" data-aos-offset="100">
        <div className="about-achievment">
          <h1>1.5+</h1>
          <p>Years of Web Development <br /> Learning</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>20+</h1>
          <p> Small Projects Built</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>8+</h1>
          <p>Real-world Mini Projects</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>1000+</h1>
          <p> Hours Coding Practice</p>
        </div>
        
      </div>
    </div>

    
  );
};

export default Skills;