import React from 'react'
import './buttons.css'


const Button = (props) => {
    const {type, text, style, action} = props
    return (
        <div className="admin_button">
            <button className={style === "Cancel"? 'button_cancel':''} onClick={action} type={type}>{text}</button>
        </div>
    )
}

export default Button