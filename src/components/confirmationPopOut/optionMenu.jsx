import React from 'react'
import './optionMenu.css'


const OptionMenu = (props) => {
    const {options} = props

    return (
        <div className='option_menu'>
            {options.map(option => {
                return (
                    <div className='menu_option'>
                        {option.icon}
                        <h1>{option.label}</h1>
                    </div>)
            })}

        </div>
    )
}

export default OptionMenu