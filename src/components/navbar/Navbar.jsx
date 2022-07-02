import React, { useState } from 'react'
import './navbar.css'
import logo from './../../assets/logo.png'
import search from './../../assets/search-icon.png'
import { Menu } from './../../components'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="dacris__navbar">
      <div className="dacris__navbar-links">
        <div className="dacris__navbar-links_logo">
          <img src={logo} alt="logo.png" />
        </div>
        <div className="dacris__navbar-links_items">
          <ul className="dacris__navbar-links_items_list">
            <li className="dacris__navbar-links_items_list_item"><a href="">inicio</a></li>
            <li className="dacris__navbar-links_items_list_item"><a href="">nosotros</a></li>
            <li className="dacris__navbar-links_items_list_item"><a href="">catalogo</a>
              <i>
                {toggleMenu
                  ? <i class="bx bxs-down-arrow" onClick={() => setToggleMenu(false)}>menu</i>
                  : <i class="bx bxs-down-arrow" onClick={() => setToggleMenu(true)}>menu</i>
                }
              </i>
            </li>
            <li className="dacris__navbar-links_items_list_item"><a href="">puntos de venta</a></li>
            <li className="dacris__navbar-links_items_list_item"><a href="">promociones</a></li>
            <li className="dacris__navbar-links_items_list_item"><a href=""><img src={search} alt="search-icon.png" /></a></li>
          </ul>
        </div>
      </div>
      {toggleMenu && (
        <Menu />
      )}
    </div>
  )
}

export default Navbar