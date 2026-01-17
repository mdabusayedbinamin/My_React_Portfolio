import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../../assets/sayed.jpg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (navItem) => {
    setMenu(navItem);
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img className='sayed' src={logo} alt="logo" />
      
      <img 
        src={menu_open} 
        onClick={() => setIsMenuOpen(true)} 
        alt="open" 
        className='nav-mob-open'
      />
      
      {/* Pop-up Menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <img 
          src={menu_close} 
          onClick={() => setIsMenuOpen(false)} 
          alt="close" 
          className="nav-mob-close" 
        />
        
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => handleNavClick("home")}>Home</p>{menu === "home" && <img src={underline} alt='' />}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => handleNavClick("about")}>About</p>{menu === "about" && <img src={underline} alt='' />}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={() => handleNavClick("service")}>Services</p>{menu === "service" && <img src={underline} alt='' />}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => handleNavClick("work")}>Portfolio</p>{menu === "work" && <img src={underline} alt='' />}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => handleNavClick("contact")}>Contact</p>{menu === "contact" && <img src={underline} alt='' />}</AnchorLink></li>
      </ul>
      
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink> 
      </div>
    </div>
  );
};

export default Navbar;