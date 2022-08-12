import React from 'react'
import "./header_title.css"

const HeaderTitle = ({ title }) => {
  return (
    <div className='dacris__header-title'>
        <div className='dacris__header-title-content'>
            <h1 className='dacris__header-title-content-text'>{title}</h1>
        </div>
    </div>
  )
}

export default HeaderTitle