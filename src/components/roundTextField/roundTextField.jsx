import React, {useState}from 'react'
import './roundTextField.css'
import {Search} from 'react-bootstrap-icons'


const RoundTextField = () => {
    return (
        <div className='round_textfield'>
            <Search/>
            <input type="value"></input>
        </div>  
    )
}

export default RoundTextField