import React, {useEffect, useState} from 'react'
import './adminTable.css'
import AdminTableRow from './adminTableRows'
import { getProducts} from '../../api/index'
import { CaretLeftFill, CaretRightFill} from 'react-bootstrap-icons'
import RoundTextField from '../roundTextField/roundTextField'

const AdminTable = () => {
    //Fetch Data
    const [products, setProducts] = useState([])
    const [interval, setInterval] = useState({start: 0, quantity: 5, page:1})
    useEffect(()=>{
        call();
    }, [])

    const call = async() =>{
        setProducts(await getProducts("mini"))
    }

    const nextPage = ()=>{
        if(products.length)
        setInterval({start: interval.start + interval.quantity, quantity: interval.quantity, page: interval.page+1})
    }

    const prevPage = ()=>{
        setInterval({start: interval.start - interval.quantity, quantity: interval.quantity, page: interval.page-1})
    }

    const handleKeyPress = async (e) =>{
        if(e.key === "Enter"){
            await call();
            if(e.target.value !== ''){
                console.log(e.target.value)
                const filteredProducts = products.filter(product => product.name.includes(e.target.value))
                setProducts(filteredProducts)
            }
        }
    }

    return (
        <div className="admin_table">
            <h1>Product Table</h1>
            <RoundTextField
            action = {(e) => handleKeyPress(e)}
            />
            <br></br>
            <table>
                <thead>
                <tr className='admin_table_row admin_table_header'>
                    <th  className='table_icon'> </th>
                    <th className='table_img'>Imagen</th>
                    <th className='table_longText'>Categoria</th>
                    <th className='table_shortText'>Tamaño</th>
                    <th className='table_longText'>Nombre</th>
                    <th className='table_longText'>Descripcion</th>
                    <th className='table_longText'>Precio</th>
                    <th className='table_icon'>Disponibilidad</th>
                    <th className='table_icon'>En Tienda</th>
                </tr>
                </thead>
                <tbody>
                {
                    
                    products.slice(interval.start, interval.start + interval.quantity).map((product, i)=>(
                        <AdminTableRow
                        name= {product.name}
                        description = {product.description}
                        price = {product.price}
                        category = {product.category_name}
                        disponibility = {product.available}
                        onStore = {product.in_store}
                        key = {product.pk_product}
                        size = {product.size}
                        image = {product.images[0].url}
                        index = {i}
                        />

                    ))
                    
                }
                </tbody>
            </table>
            <div className='table_button'>
                <button onClick={()=>{prevPage()}} style={interval.start === 0? {visibility: "hidden"}: {visibility: "visible"}}><CaretLeftFill/></button>
                <p>{interval.page}</p>
                <button onClick={()=>{nextPage()}} style={(interval.start+interval.quantity) >= products.length? {visibility: "hidden"}: {visibility: "visible"}}><CaretRightFill/></button>
            </div>
        </div>
    )
}

export default AdminTable