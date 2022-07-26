import React from 'react'
import './textfields.css'


const FormTextField = (props) => {
    const {placeholder, action, title} = props
    return (
        <div className='form_textfield'>
            <h1>{title}</h1>
            <input type="value" placeholder={placeholder}></input>
        </div>
    )
}

export default FormTextField