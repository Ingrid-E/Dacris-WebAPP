import React from 'react'
import './buttons.css'


const Button = (props) => {
    const {text, style} = props
    return (
        <div className="admin_button">
            <button className={style === "Cancel"? 'button_cancel':''}>{text}</button>
        </div>
    )
}

export default Button