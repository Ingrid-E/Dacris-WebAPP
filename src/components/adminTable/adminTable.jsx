import React, { useEffect, useState } from 'react'
import './adminTable.css'
import AdminTableRow from './adminTableRows'
import { getProducts, deleteProducts} from '../../api/index'
import { CaretLeftFill, CaretRightFill, TrashFill} from 'react-bootstrap-icons'
import RoundTextField from '../roundTextField/roundTextField'
import ConfirmationPopOut from '../confirmationPopOut/confirmationPopOut'


const AdminTable = () => {
    //Fetch Data
    const [products, setProducts] = useState([])
    const [pagination, setPagination] = useState({page: 1, limit: 5, length: 0, filter: ''})
    const [checkedProducts, setCheckedProducts] = useState([])
    const [popout, setPopOut] = useState({state:'close'})

    useEffect(() => {
        call();
        //eslint-disable-next-line
    }, [])

    const call = async () => {
        const callProducts = await getProducts(pagination.page, pagination.limit, pagination.filter)
        setProducts( callProducts.products)
        setPagination({...pagination, length: callProducts.length.count})
    }

    const nextPage = () => {
        /*
        if product length = 10, limit =5 nextButton is enabled till
        if page * limit >= product.length then not enabled

        */
        ++pagination.page
        console.log(pagination)
        call();

    }

    const prevPage = () => {
        --pagination.page
        console.log(pagination)
        call();
    }

    const handleKeyPress = async (e) => {
        if (e.key === "Enter") {
            pagination.filter = e.target.value
            call();
        }
    }

    const handleCheckedProducts = (id_product, value) =>{
        if(value){
            checkedProducts.push(id_product)
        }else{
            checkedProducts.splice(checkedProducts.indexOf(id_product), 1)
        }
        console.log(checkedProducts)
    }

    const openPopOut = ()=>{
        console.log("Deleting")
        setCheckedProducts(checkedProducts)
        setPopOut({state:'open', title: 'Eliminar', description: 'Estas seguro que quieres eliminar este producto?', confirmation: 'Continuar', action: handleDelete})
        console.log(popout)
    }

    const handleDelete = async () => {
        await deleteProducts(checkedProducts)
        console.log("Deleting Product")
        setPopOut({state: 'closed'})
        call()
        call()

    }
    

    return (
        <div className="admin_table">
            <ConfirmationPopOut
            state={popout.state}
            title={popout.title}
            description={popout.description}
            confirmation={popout.confirmation}
            clickAction = {popout.action}/>


            <h1>Product Table</h1>
            <div className='admin_table_options'>
                <RoundTextField
                    action={(e) => handleKeyPress(e)}
                />
                <TrashFill 
                className='table_options_icons'
                onClick={()=>openPopOut()}/>
            </div>
            <br></br>
            <table>
                <thead>
                    <tr className='admin_table_row admin_table_header'>
                        <th className='table_icon'> </th>
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

                        products.map((product, i) => (
                            <AdminTableRow
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                category={product.category_name}
                                disponibility={product.available}
                                onStore={product.in_store}
                                key={product.pk_product}
                                id={product.pk_product}
                                size={product.size}
                                image={product.images.length > 0? product.images[0].url:'#'}
                                index={i}
                                checkedProducts = {checkedProducts}
                                onClick={handleCheckedProducts}
                            />

                        ))

                    }
                </tbody>
            </table>
            <div className='table_button'>
                <button onClick={() => { prevPage() }} style={pagination.page === 1 ? { visibility: "hidden" } : { visibility: "visible" }}><CaretLeftFill /></button>
                <p>{pagination.page}</p>
                <button onClick={() => { nextPage()}} style={(pagination.page * pagination.limit) >= pagination.length ? { visibility: "hidden" } : { visibility: "visible" }} ><CaretRightFill /></button>
            </div>
        </div>
    )
}

export default AdminTable