import React, { useRef, useState } from 'react';
import "./Navbar.css";
import logo from '../../assets/sayed.jpg';
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu , setMenu]= useState("home")
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right = "0"
  }
    const closeMenu = ()=>{
    menuRef.current.style.right = "-350px"
  }



  return (
    <div className="navbar">
      <img className='sayed' src={logo} alt="logo" />
      <img src={menu_open} onClick={openMenu} alt=""  className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />
        <li> <AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>{setMenu("home")}}> Home</p>{menu === "home"?<img src={underline}></img> : <></>}</AnchorLink> </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu("about")}}>About</p> {menu === "about"?<img src={underline}></img> : <></>}</AnchorLink> </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=>{setMenu("service")}}>Services</p>  {menu === "service"?<img src={underline}></img> : <></>}</AnchorLink> </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>{setMenu("work")}}>Portfolio</p> {menu === "work"?<img src={underline}></img> : <></>}</AnchorLink> </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu("contact")}}>Contact</p> {menu === "contact"?<img src={underline}></img> : <></>} </AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me</AnchorLink> </div>
    </div>
  );
};

export default Navbar;
