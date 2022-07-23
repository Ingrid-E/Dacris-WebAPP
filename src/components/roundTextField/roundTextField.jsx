import React from 'react'
import './roundTextField.css'
import {Search} from 'react-bootstrap-icons'


const RoundTextField = (props) => {
    const {action} = props

    return (
        <div className='round_textfield'>
            <Search/>
            <input type="value" placeholder='Busca Productos' onKeyPress={action}></input>
        </div>  
    )
}

export default RoundTextField