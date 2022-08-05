import React from 'react'
import './textfields.css'


const FormTextField = (props) => {
    const {placeholder, action, title, size, type, state} = props

    return (
        <div className='form_textfield'>
            <h1>{title}</h1>
            {size === 'big'? 
            (<textarea style= {state === "error"? {outline: "red solid 1px"}:{outline: "darkgray solid 1px"}} id="long" rows="5" cols="40"  onChange={action}></textarea>)
            :
            (<input style= {state === "error"? {outline: "red solid 1px"}:{outline: "darkgray solid 1px"}}type={type} placeholder={placeholder}  onChange={action}></input>)}
    
        </div>
    )
}

export default FormTextField