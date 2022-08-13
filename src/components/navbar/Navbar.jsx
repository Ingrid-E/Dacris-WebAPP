import React, { useState } from 'react';
import './navbar.css';
import logo from './../../assets/logo.png'
import search from './../../assets/search-icon.png'
import { Menu } from './../../components';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const [toggleMenuResponsive, setToggleMenuResponsive] = useState(false);

  return (
    <div className='dacris__navbar'>
      <div className='dacris__navbar-links'>
        <div className='dacris__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='dacris__navbar-links_items-container'>
        <div className={`dacris__navbar-links_items ${toggleMenuResponsive ? "show" : ""}`}>
          <ul className="dacris__navbar-links_items_list">
            <li className='dacris__navbar-links_items_list_item'><a href="/">inicio</a></li>
            <li className='dacris__navbar-links_items_list_item'><a href="/nosotros">nosotros</a></li>
            <li className='dacris__navbar-links_items_list_item'><a href="">catalogo</a>
              <i>
              {toggleMenu
                ? <i className='bx bxs-down-arrow' onClick={() => setToggleMenu(false)}></i>
                : <i className='bx bxs-down-arrow' onClick={() => setToggleMenu(true)}></i>
              }
              </i>
            </li>
            <li className='dacris__navbar-links_items_list_item'><a href="/puntos-ventas">puntos de venta</a></li>
            <li className='dacris__navbar-links_items_list_item'><a href="">promociones</a></li>
          </ul>
        </div>
        <div className='dacris__navbar-links-buttons'>
          <a href=""><img src={search} alt="search-icon" /></a>
          <div className='dacris__navbar-links-burguer-button'>
            <div className={`dacris__navbar-links-burguer-button-line ${toggleMenuResponsive ? "open" : ""}`} onClick={() => toggleMenuResponsive ? setToggleMenuResponsive(false) : setToggleMenuResponsive(true)}></div>
          </div>
        </div>
        </div>
      </div>
      {toggleMenu && (
        <Menu />
      )}
    </div>
  )
}

export default Navbar