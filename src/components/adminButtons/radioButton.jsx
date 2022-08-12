import React from 'react'
import './buttons.css'


const RadioButton = (props) => {
    const {checkedButton} = props

    return (
        <div className="admin_radioButton" 
        onClick={()=>!checkedButton} 
        style={checkedButton? {backgroundColor: "#115E83"}:
                        {backgroundColor: "white"}}>
            
        </div>
    )
}

export default RadioButton