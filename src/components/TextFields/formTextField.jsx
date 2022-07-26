import React from 'react'
import './textfields.css'


const FormTextField = (props) => {
    const {placeholder, action, title, size} = props
    return (
        <div className='form_textfield'>
            <h1>{title}</h1>
            {size === 'big'? 
            (<textarea id="long" rows="5" cols="40"></textarea>)
            :
            (<input type="value" placeholder={placeholder}></input>)}
    
        </div>
    )
}

export default FormTextField