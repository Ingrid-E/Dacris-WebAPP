import React from 'react'
import './confirmationPopOut.css'


const ConfirmationPopOut = (props) => {
    const {title, description, confirmation, state, clickAction} = props

    return (
        <div className="confirmation_popout" style={state === "open"? {visibility: "visible"}: {visibility:"hidden"}}>
            <h1>{title}</h1>
            <hr size="8" width="100%" color="#CED4DA"/>  
            <p>{description}</p>
            <hr size="8" width="100%" color="#CED4DA"/>  
            <div className='popout_buttons'>
                <button
                style={{backgroundColor: "#6C757D"}}
                onClick={()=>{}}>Cancelar</button>

                <button
                style={{backgroundColor: "#007BFF"}}
                onClick={()=> clickAction()}
                >
                {confirmation}
                </button>
            </div>
        </div>
    )
}

export default ConfirmationPopOut