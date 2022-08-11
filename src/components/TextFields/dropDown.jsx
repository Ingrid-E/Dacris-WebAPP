import React, { useEffect, useState} from 'react'
import './textfields.css'
import { getCategories } from '../../api/categories'


const DropDown = (props) => {
    let {title, action, state, value} = props
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const call = async () => {
            const callCategories = await getCategories()
            setCategories( callCategories)
        }
        call()
        console.log(categories)
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
    }, [value])

    return (
        <div className='form_dropdown'>
            <h1>{title}</h1>
            <select 
            style= {state === "error"? {outline: "red solid 1px"}:{}} 
            name="category" id="category" 
            onChange={action}
            value={value}
            >
            <option value='' disabled> -- Seleciona una categoria -- </option>
            {
                categories.map((category)=> {
                    return (<option value={category.pk_category} key={category.pk_category}>{category.name}</option>)
                })
            }
            </select>
            <p style={state === "error"? {visibility: "visible"}: {visibility:"hidden"}}>Campo obligatorio</p>
        </div>
    )
}

export default DropDown