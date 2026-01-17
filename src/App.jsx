import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from "./Components/Skills/Skills";
import Background from './Components/Background/Background';



  function App() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,   // এটি false থাকলে প্রতিবার স্ক্রল করলে অ্যানিমেশন হবে
    mirror: true,  // এটি true থাকলে উপরে স্ক্রল করার সময়ও এলিমেন্টগুলো অ্যানিমেশন হবে
    easing: 'ease-in-out',
  });
}, []);
  return (
    <>
    <Background />
      <Navbar></Navbar>
      <Hero />
      <About />
      <Skills></Skills>
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
