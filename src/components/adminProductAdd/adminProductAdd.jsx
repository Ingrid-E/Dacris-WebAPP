import React from 'react'
import './adminProductAdd.css'
import FormTextField from '../TextFields/formTextField'
import Button from '../adminButtons/button'
import ProductImageAdd from './productImageAdd'
const AdminProductAdd = () => {

    return (
        <div className="admin_product_add">
            <div className='product_data'>
                <div className='add_image'>
                    <ProductImageAdd/>
                </div>
                <div className='add_information'>
                    <FormTextField
                    title = "Nombre"/>
                    <FormTextField
                    title = "Precio"/>
                    <FormTextField
                    title = "Categoria"/>
                    <FormTextField
                    title = "Descripcion"
                    size = "big"/>
                </div>
            </div>
            <div className='add_buttons'>
            <Button text = "CANCELAR"
                style = "Cancel"/>
                <Button text = "AGREGAR PRODUCTO"/>
            </div>
        </div>
    )
}

export default AdminProductAdd