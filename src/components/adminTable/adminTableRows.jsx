import React, {useState} from 'react'
import './adminTable.css'
import {XCircle, CheckLg} from 'react-bootstrap-icons'
import AdminCheckButton from '../adminCheckButton/adminCheckButton'
const AdminTableRow = (props) => {
    const [checked, setChecked] = useState(false)
    const {image, category, size, name, description, price, disponibility, onStore, index} = props;
    return (
            <tr className="admin_table_row" style={checked? {backgroundColor: "#CEEEFF"}: index%2 === 0? {backgroundColor: "white"}: {backgroundColor: "#F2F2F2"}}>
                <td className='table_row_icon' onClick={()=> {setChecked(!checked)}}><AdminCheckButton /></td>
                <td>{image !== undefined? (<div className='table_img'><img src={image} alt={name + " " + category}></img></div>): <div className='table_img'><img src="#" alt="Not loaded"></img></div>}</td>
                <td className='table_longText'>{category !== undefined? category: 'Categoria'}</td>
                <td className='table_shortText'>{size !== undefined? size: 'Tamaño'}</td>
                <td className='table_longText'>{name !== undefined? name: 'Nombre'}</td>
                <td className='table_longText'>{description !== undefined? description: 'Descripcion'}</td>
                <td className='table_longText'>{price !== undefined? price: 'Precio'}</td>
                <td className='table_icon'>{disponibility !== true? <XCircle/>: <CheckLg/>}</td>
                <td className='table_icon'>{onStore !== true? <XCircle/>: <CheckLg/>}</td>
            </tr>
    )
}

export default AdminTableRow