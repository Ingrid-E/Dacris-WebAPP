import React from 'react'
import './menu.css'

const Menu = () => {
  return (
    <div className='dacris__menu'>
        <div className='dacris__menu-content'>
            <div className='dacris__menu-content_list'>
                <a className='dacris__menu-content_list-item' href="">nuevo</a>
                <a className='dacris__menu-content_list-item' href="">descuentos</a>
                <a className='dacris__menu-content_list-item' href="">hombre<i class='bx bxs-down-arrow'></i></a>
                <a className='dacris__menu-content_list-item' href="">mujer<i class='bx bxs-down-arrow'></i></a>
            </div>
            <div className='dacris__menu-content_line'></div>
            <div className='dacris__menu-content_list'>
                <a className='dacris__menu-content_list-item' href="">manos libres</a>
                <a className='dacris__menu-content_list-item' href="">morrales</a>
                <a className='dacris__menu-content_list-item' href="">bolsos</a>
            </div>
            <div className='dacris__menu-content_line'></div>
            <div className='dacris__menu-content_list'>
                <a className='dacris__menu-content_list-item' href="">sobres de fiesta</a>
                <a className='dacris__menu-content_list-item' href="">cosmetiqueras</a>
                <a className='dacris__menu-content_list-item' href="">accesorios</a>
            </div>
        </div>
    </div>
  )
}

export default Menu