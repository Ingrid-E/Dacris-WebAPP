import React from 'react'
import './adminProductAdd.css'
import FormTextField from '../TextFields/formTextField'

const AdminProductAdd = () => {

    return (
        <div className="admin_product_add">
            <div className='add_image'></div>
            <div className='add_information'>
                <FormTextField/>
                <FormTextField/>
                <FormTextField/>
                <FormTextField/>
            </div>
        </div>
    )
}

export default AdminProductAdd