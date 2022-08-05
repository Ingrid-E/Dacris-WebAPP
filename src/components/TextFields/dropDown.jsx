import React, { useEffect, useState} from 'react'
import './textfields.css'
import { getCategories } from '../../api/categories'


const DropDown = (props) => {
    const {title, action} = props
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const call = async () => {
            const callCategories = await getCategories()
            setCategories( callCategories)
            console.log(callCategories)
        }
        call()
        //eslint-disable-next-line
    }, [])

    return (
        <div className='form_dropdown'>
            <h1>{title}</h1>
            <select name="category" id="category" onChange={action}>
            {
                categories.map((category, i)=> (
                    <option value={category.pk_category}>{category.name}</option>
                ))
            }
            </select>
        </div>
    )
}

export default DropDown