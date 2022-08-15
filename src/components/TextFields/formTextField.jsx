import React, {useState, useEffect} from 'react'
import './textfields.css'

const FormTextField = (props) => {
    const {placeholder, action, title, size, type, state, value} = props
    const [rows, setRows] = useState()

    useEffect(() => {
        window.matchMedia('(max-height: 768px)').addEventListener('change', event => setDimension(event))
        setDimension()
    }, [])
    
    const setDimension = (event = null) => {
        if(event === null){
            let max768 = window.matchMedia('(max-height: 768px)').matches
            if(max768){
                setRows(3)
            }else{
                setRows(5)
            }
        }else{
            if (event.matches) {
              setRows(3)
            } else {
               setRows(5)
            }
    }
    }

    return (
        <div className='form_textfield'>
            <h1>{title}</h1>
            {size === 'big'? 
            (<textarea style= {state === "error"? {outline: "red solid 1px"}:{outline: "darkgray solid 1px"}} id="long" rows={rows} cols="40"  onChange={action} defaultValue={value}></textarea>)
            :
            (<input style= {state === "error"? {outline: "red solid 1px"}:{outline: "darkgray solid 1px"}}type={type} placeholder={placeholder}  onChange={action} defaultValue={value}></input>
            )}
            <p style={state === "error"? {visibility: "visible"}: {visibility:"hidden"}}>Campo obligatorio</p>
    
        </div>
    )
}

export default FormTextField