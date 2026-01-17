// আপনার প্রজেক্টের ইমেজগুলো আগে এখানে ইমপোর্ট করুন
import project1_img from './todo.jpg'
import project2_img from './weather.jpg'
import project3_img from './libaration.jpg'
import project4_img from './agriculture.jpg'
import project5_img from './travel.jpg'
// এভাবে আপনার সব ইমেজ ইমপোর্ট করুন...

const mywork_data = [
    {
        w_no: 1,
        w_name: "Todo App-React", // এখানে আপনার প্রজেক্টের নাম দিন
        w_img: project1_img,   // এখানে ইমপোর্ট করা ইমেজের নাম দিন
        w_link: "https://react-todo-app-sayed.netlify.app/" // এখানে আপনার প্রজেক্টের লাইভ লিঙ্ক দিন
    },
    {
        w_no: 2,
        w_name: "Weather App-React",
        w_img: project2_img,
        w_link: "https://react-weather-app-sayed.netlify.app/" // লাইভ লিঙ্ক না থাকলে গিটহাব লিঙ্ক দিন
    },
    // নতুন প্রজেক্ট বাড়াতে চাইলে নিচের অংশটুকু কপি করে নিচে বসান
    {
        w_no: 3,
        w_name: "Agriculture Hub",
        w_img: project3_img, // আপাতত একই ইমেজ দেখাচ্ছি
        w_link: "https://abusayed09.github.io/AgricultureHub-website/"
    },
        {
        w_no: 2,
        w_name: "Libaration War",
        w_img: project4_img,
        w_link: "https://abusayed09.github.io/Libaration-WAR-02/" // লাইভ লিঙ্ক না থাকলে গিটহাব লিঙ্ক দিন
    },
        {
        w_no: 2,
        w_name: "Traversal",
        w_img: project5_img,
        w_link: "https://abusayed09.github.io/Traversal-Project-Bootstrap/" // লাইভ লিঙ্ক না থাকলে গিটহাব লিঙ্ক দিন
    },
        {
        w_no: 2,
        w_name: "Templete",
        w_img: project6_img,
        w_link: "https://abusayed09.github.io/Html_Css_Js_Row_Project_02/" // লাইভ লিঙ্ক না থাকলে গিটহাব লিঙ্ক দিন
    },
];

export default mywork_data;