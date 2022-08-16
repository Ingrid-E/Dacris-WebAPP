import React from 'react'
import './optionMenu.css'


const OptionMenu = (props) => {
    const {options} = props

    return (
        <div className='option_menu'>
            {options.map(option => {
                return (
                    <label htmlFor={option.label} className='menu_option'>
                    {option.icon}
                    <h1>{option.label}</h1>
                    <input type={option.input} id={option.label} key={option.label}
                accept='image/png, image/jpeg'
                onChange={(e)=>option.action(e)}
                onClick={()=>option.action()}
            />
                
                    </label>
                    )
            })}

        </div>
    )
}

export default OptionMenu