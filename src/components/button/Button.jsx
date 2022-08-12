import React from 'react'
import './button.css'

const Button = ({ text, style }) => {



  return (
    <a style={style} className='button'>{text}</a>
  )
}

export default Button