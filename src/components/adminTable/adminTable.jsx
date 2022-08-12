import React, { useEffect, useState } from 'react'
import './adminTable.css'
import AdminTableRow from './adminTableRows'
import { getProducts, deleteProducts, getProduct} from '../../api/index'
import { CaretLeftFill, CaretRightFill, TrashFill, PlusLg, PencilFill} from 'react-bootstrap-icons'
import RoundTextField from '../TextFields/roundTextField'
import ConfirmationPopOut from '../confirmationPopOut/confirmationPopOut'
import AdminProductAdd from '../adminProductAdd/adminProductAdd'
import CheckMark from '../animations/checkMark'

const AdminTable = () => {
    //Fetch Data
    const [products, setProducts] = useState([])
    const [pagination, setPagination] = useState({page: 1, limit: 5, length: 0, filter: ''})
    const [checkedProducts, setCheckedProducts] = useState([])
    const [popout, setPopOut] = useState({state:'close'})

    useEffect(() => {
    }, [checkedProducts])

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
        ++pagination.page
        call();

    }

    const prevPage = () => {
        --pagination.page
        call();
    }

    const handleKeyPress = async (e) => {
        if (e.key === "Enter") {
            pagination.filter = e.target.value
            pagination.page = 1
            call();
        }
    }

    const handleCheckedProducts = async (id_product, value) =>{
        if(value){
            setCheckedProducts([...checkedProducts, id_product])
        }else{
            checkedProducts.splice(checkedProducts.indexOf(id_product), 1)
            let clone = [...checkedProducts]
            setCheckedProducts([...clone])
        }
    }

    const openPopOut = async (name = '')=>{
        if(name === 'Delete'){
            setCheckedProducts(checkedProducts)
            setPopOut({state:'open', title: 'Eliminar', description: 'Estas seguro que quieres eliminar este producto?', confirmation: 'Continuar', action: handleDelete})
        }
        if(name === 'Add'){
            setCheckedProducts(checkedProducts)
            setPopOut({state:'open', title: 'Agregar', action: handleAdd})
        }
        if(name === 'Edit'){
            setCheckedProducts(checkedProducts)
            let product = await getProduct(checkedProducts[0]).then(res=>{
                return res
            })
            setPopOut({state:'open', title: 'Editar', action: handleAdd, oldInfo: product})
        }
        renderPopOut()
        return true
    }


    const renderPopOut = () => {
        if(popout.title === 'Eliminar' && checkedProducts.length > 0){
            return (
            <ConfirmationPopOut
            state={popout.state}
            title={popout.title}
            description={popout.description}
            confirmation={popout.confirmation}
            clickAction = {popout.action}/>
            )
        }
        if(popout.title === 'Agregar'){
            return (
            <AdminProductAdd
            state={popout.state}
            clickAction={popout.action}/>
            )
        }
        if(popout.title === 'Editar'){
            return (
            <AdminProductAdd
            state={popout.state}
            oldInfo = {popout.oldInfo}
            clickAction={popout.action}/>
            )
        }
        return <div></div>
    }

    const handleDelete = async (button) => {
        if(button !== "Cancel" && checkedProducts.length > 0){
            await deleteProducts(checkedProducts)
            await call()
            pagination.page = 1
            setPopOut({state: 'closed', status:"success"})
            setTimeout(()=>{setPopOut({state:'closed', status:'finished'})}, 1500)
            setCheckedProducts([])
            setPagination(pagination)
        }else if(button === "Cancel" ){
            setPopOut({state: 'closed'})
        }
        
    }

    const handleAdd = async(button)=>{
        if(button !== "Cancel"){
            await call()
            setPopOut({state: 'closed', status:"success"})
            setTimeout(()=>{setPopOut({state:'closed', status:'finished'})}, 1500)
            pagination.page = 1
        }else if(button === "Cancel" ){
            setPopOut({state: 'closed'})
        }
    }

    

    return (
        
        <div className="admin_table">
            {renderPopOut()}
            {popout.status === "success"? <CheckMark/>:<div></div>}

            <h1>Product Table</h1>
            <div className='admin_table_options'>
                <RoundTextField
                    action={(e) => handleKeyPress(e)}
                />
                <PlusLg
                className='table_options_icons'
                onClick={()=>openPopOut("Add")}/>
                <TrashFill 
                className='table_options_icons'
                onClick={()=>openPopOut("Delete")}/>
                <div style={checkedProducts.length !== 1? {visibility: "hidden"}: {visibility: "visible"}}>
                <PencilFill
                className='table_options_icons'
                onClick={()=>openPopOut("Edit")}/>
                </div>

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