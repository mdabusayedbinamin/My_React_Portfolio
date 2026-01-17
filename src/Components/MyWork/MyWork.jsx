import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import project1_img from '../../assets/todo.jpg';
import project2_img from '../../assets/weather.jpg';
import project3_img from '../../assets/agriculture.jpg';
import project4_img from '../../assets/libaration.jpg';
import project5_img from '../../assets/travel.jpg';
import project6_img from '../../assets/delivery.jpg';

const MyWork = () => {

    const mywork_data = [
        {
            w_no: 1,
            w_name: "Todo App-React",
            w_img: project1_img,
            w_desc: "Modern task management with real-time updates.",
            w_link: "https://react-todo-app-sayed.netlify.app/"
        },
        {
            w_no: 2,
            w_name: "Weather App-React",
            w_img: project2_img,
            w_desc: "Live weather tracking using OpenWeather API.",
            w_link: "https://react-weather-app-sayed.netlify.app/"
        },
        {
            w_no: 3,
            w_name: "Agriculture Hub",
            w_img: project3_img,
            w_desc: "A complete solution for modern farming info.",
            w_link: "https://abusayed09.github.io/AgricultureHub-website/"
        },
        {
            w_no: 4,
            w_name: "Liberation War",
            w_img: project4_img,
            w_desc: "Historical archive of Bangladesh's independence.",
            w_link: "https://abusayed09.github.io/Libaration-WAR-02/"
        },
        {
            w_no: 5,
            w_name: "Traversal",
            w_img: project5_img,
            w_desc: "Modern travel agency landing page using Bootstrap.",
            w_link: "https://abusayed09.github.io/Traversal-Project-Bootstrap/"
        },
        {
            w_no: 6,
            w_name: "Premium Template",
            w_img: project6_img,
            w_desc: "Interactive row project built with HTML, CSS & JS.",
            w_link: "https://abusayed09.github.io/Html_Css_Js_Row_Project_02/"
        },
    ];

    return (
        <div className='mywork' id='work'>
            <div className="mywork-title" data-aos="fade-down" data-aos-duration="1000">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <a 
                        key={index} 
                        href={work.w_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="work-item"
                        data-aos="zoom-in" 
                        data-aos-delay={index * 150}
                        data-aos-duration="800"
                    >
                        <div className="work-img-container">
                            <img src={work.work_img || work.w_img} alt={work.w_name} />
                            <div className="work-overlay">
                                <h2>{work.w_name}</h2>
                                <p>{work.w_desc}</p>
                                <div className="view-link">
                                    <span>View Project</span>
                                    <img src={arrow_icon} alt="" style={{width: '15px', filter: 'brightness(0) invert(1)'}} />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mywork-showmore" data-aos="fade-up" data-aos-duration="1000">
                <p>Show More</p>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
    );
};

export default MyWork;