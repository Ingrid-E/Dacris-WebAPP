import React from 'react'
import './adminTable.css'
import AdminTableRow from './adminTableRows'

const AdminTable = () => {
    return (
        <div className="admin_table">
            <table>
                <tr className='admin_table_row admin_table_header'>
                    <th  className='table_icon'>X</th>
                    <th className='table_img'>Image</th>
                    <th className='table_longText'>category</th>
                    <th className='table_shortText'>Size</th>
                    <th className='table_longText'>Nane</th>
                    <th className='table_longText'>Description</th>
                    <th className='table_longText'>Price</th>
                    <th className='table_icon'>Dis</th>
                    <th className='table_icon'>OS</th>
                </tr>
                <AdminTableRow/>
            </table>

        </div>
    )
}

export default AdminTable