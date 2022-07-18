import React from 'react'
import './adminTable.css'

const AdminTableRow = (props) => {
    const {image, category, size, name, description, price, disponibility, onStore} = props;
    return (
            <tr className="admin_table_row">
                <td className='table_icon'>x</td>
                <td>{image != undefined? (<div className='table_img'><img src={image}></img></div>): <div className='table_img'><img src="#"></img></div>}</td>
                <td className='table_longText'>{category != undefined? category: 'Categoria'}</td>
                <td className='table_shortText'>{size != undefined? size: 'Tamaño'}</td>
                <td className='table_longText'>{name != undefined? name: 'Nombre'}</td>
                <td className='table_longText'>{description != undefined? description: 'Descripcion'}</td>
                <td className='table_longText'>{price != undefined? price: 'Precio'}</td>
                <td className='table_icon'>{disponibility != undefined? disponibility: 'X'}</td>
                <td className='table_icon'>{onStore != undefined? onStore: 'X'}</td>
            </tr>
    )
}

export default AdminTableRow