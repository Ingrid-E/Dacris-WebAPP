import React from 'react'
import './textfields.css'


const FormTextField = (props) => {
    const {placeholder, action, title, size, type, state, value} = props

    return (
        <div className='form_textfield'>
            <h1>{title}</h1>
            {size === 'big'? 
            (<textarea style= {state === "error"? {outline: "red solid 1px"}:{outline: "darkgray solid 1px"}} id="long" rows="5" cols="40"  onChange={action} defaultValue={value}></textarea>)
            :
            (<input style= {state === "error"? {outline: "red solid 1px"}:{outline: "darkgray solid 1px"}}type={type} placeholder={placeholder}  onChange={action} defaultValue={value}></input>
            )}
            <p style={state === "error"? {visibility: "visible"}: {visibility:"hidden"}}>Campo obligatorio</p>
    
        </div>
    )
}

export default FormTextField