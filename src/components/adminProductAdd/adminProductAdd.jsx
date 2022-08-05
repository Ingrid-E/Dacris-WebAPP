import React, { useState} from 'react'
import './adminProductAdd.css'
import FormTextField from '../TextFields/formTextField'
import Button from '../adminButtons/button'
import ProductImageAdd from './productImageAdd'
import DropDown from '../TextFields/dropDown'

const AdminProductAdd = () => {
    const [product, setProduct] = useState({name: '', price: '', category: '', description: '', images: []})
    const [fieldsState, setFieldsState] = useState({name: "normal", price: "normal", category: "normal", description: "normal", images: "normal"})
    const handleKeyPress = async (e, name) => {
        setProduct({...product, [name]: e.target.value})
        console.log(product)
    }

    const loadImages = (images) => {
        setProduct({...product, images: images})
        console.log("Main: ", images)
    }

    const createProduct = () => {
        console.log("Product Being Clicked")
        checkValues()
    }

    const checkValues = () => {
        let completed = true
        Object.entries(product).forEach(([key,value])=>{
            console.log(key, value)
            if(value === '' ||value.length === 0){
                fieldsState[key] = "error"
                completed = false
            }
        })
        setFieldsState({...fieldsState})
        return completed
        
    }

    return (
        <div className="admin_product_add">
            <div className='product_data'>
                <div className='add_image'>
                    <ProductImageAdd returnImages={loadImages} state={fieldsState.images}/>
                </div>
                <div className='add_information'>
                    <FormTextField
                    title = "Nombre"
                    action={(e) => handleKeyPress(e, "name")}
                    type = "value"
                    state = {fieldsState.name}/>
                    <FormTextField
                    title = "Precio"
                    action={(e) => handleKeyPress(e, "price")}
                    type = "number"
                    state={fieldsState.price}/>
                    <DropDown
                    title = "Categoria"
                    action={(e) => handleKeyPress(e, "category")}
                    />
                    <FormTextField
                    title = "Descripcion"
                    size = "big"
                    action={(e) => handleKeyPress(e, "description")}
                    type = "value"
                    state={fieldsState.price}/>
                </div>
            </div>
            <div className='add_buttons'>
            <Button text = "CANCELAR"
                style = "Cancel"/>
                <Button text = "AGREGAR PRODUCTO" action={createProduct}/>
            </div>
        </div>
    )
}

export default AdminProductAdd