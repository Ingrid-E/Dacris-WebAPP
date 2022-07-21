import React, {useEffect, useState} from 'react'
import './adminTable.css'
import AdminTableRow from './adminTableRows'
import { getProducts} from '../../api/index'

const AdminTable = () => {
    //Fetch Data
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])


    useEffect(()=>{
        async function call(){
            setProducts(await getProducts())
        }
        call();



    }, [])


    return (
        <div className="admin_table">
            <table>
                <thead>
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
                </thead>
                <tbody>
                {
                    
                    products.map((product, i)=>(
                        <AdminTableRow
                        name= {product.name}
                        description = {product.description}
                        price = {product.price}
                        category = {product.category_name}
                        disponibility = {product.available}
                        onStore = {product.in_store}
                        key = {product.pk_product}
                        />

                    ))
                    
                }


                </tbody>
            </table>

        </div>
    )
}

export default AdminTable