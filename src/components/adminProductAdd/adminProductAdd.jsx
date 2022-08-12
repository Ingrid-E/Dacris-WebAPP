import React, { useEffect, useState} from 'react'
import './adminProductAdd.css'
import FormTextField from '../TextFields/formTextField'
import Button from '../adminButtons/button'
import ProductImageAdd from './productImageAdd'
import DropDown from '../TextFields/dropDown'
import { postProduct, putProduct} from '../../api'
import CheckButton from '../adminButtons/checkButton'
import RadioButton from '../adminButtons/radioButton'
import Loading from '../animations/loading'


const AdminProductAdd = (props) => {
    let {state, clickAction, oldInfo} = props
    const [product, setProduct] = useState({name: '', price: '', category: '', description: '', images: [], available:false, inStore:false, size: ''})
    const [fieldsState, setFieldsState] = useState({name: "normal", price: "normal", category: "normal", description: "normal", images: "normal", available:"normal", inStore: "normal", size: "normal"})
    const [loading, setLoading] = useState("not");

    useEffect(()=> {
        if(oldInfo !== undefined){
            setProduct({name: oldInfo.name, price: oldInfo.price, category: oldInfo.fk_category_product, description: oldInfo.description, images: oldInfo.images, available: oldInfo.available, inStore: oldInfo.in_store, size: oldInfo.size})
        }
    }, [oldInfo])

    useEffect(()=>{

    }, [loading])

    const handleKeyPress = async (e, name) => {
        setProduct({...product, [name]: e.target.value})
    }

    const loadImages = async (image, index = -2, delImg=0) => {
        if(index >-1){
            product.images[index] = image
            await setProduct({...product, images: [...product.images]})
        }else if(index === -1){
            console.log(product.images)
            console.log("Eliminar Imagen")
            product['images'].splice(delImg, 1)
            await setProduct({...product, images: [...product.images]})
        }else{
            console.log(product.images)
            console.log("Imagen agregada")
            await setProduct({...product, images: [...product.images, image]})
        }
    }


    const createProduct = async () => {
        if(checkValues()){
            setLoading("loading...")
            const response = await postProduct(product)
            if(response.success){
                setLoading("finished")
                clickAction()
            }
            
        }
    }

    const updateProduct = async () => {
        if(checkValues()){
            setLoading("loading...")
            console.log("Update products", product)
            const response = await putProduct(product, oldInfo.pk_product)
            if(response.success){
                setLoading("finished")
                clickAction()
            }
        }
    }

    const checkValues = () => {
        let completed = true

        Object.entries(product).forEach(([key,value])=>{
            if(value === '' || value.length < 0){
                fieldsState[key] = "error"
                completed = false
            }else{
                fieldsState[key] = "normal"
            }
        })
        setFieldsState({...fieldsState})
        return completed
        
    }


    return (
        <div className="admin_product_add" style={state === "open"? {visibility: "visible"}: {visibility:"hidden"}}>
            {loading !== "not"? (<div className='loading_overlay' style={loading === "success"? {background: "none"}:{}}>
                <Loading />
                </div>
            
           ): <div/>}
            <div className='product_data'>
                <div className='add_image'>
                    <ProductImageAdd oldImg = {oldInfo !== undefined? oldInfo.images: ''} returnImages={loadImages} state={fieldsState.images} files={product.images}/>
                </div>
                <div className='add_information'>
                    <FormTextField
                    title = "Nombre"
                    action={(e) => handleKeyPress(e, "name")}
                    type = "value"
                    state = {fieldsState.name}
                    value={product.name}/>
                    <FormTextField
                    title = "Precio"
                    action={(e) => handleKeyPress(e, "price")}
                    value={product.price}
                    type = "number"
                    state={fieldsState.price}/>
                    <DropDown
                    title = "Categoria"
                    state={fieldsState.category}
                    action={(e) => handleKeyPress(e, "category")}
                    value={product.category}
                    />
                    <FormTextField
                    title = "Descripcion"
                    size = "big"
                    action={(e) => handleKeyPress(e, "description")}
                    type = "value"
                    state={fieldsState.description}
                    value={product.description}/>
                    <div className='information_buttons'>
                        <div>
                            <div onClick={()=>setProduct({...product, available:!product.available})}>
                            <CheckButton checkedButton={product.available} />
                            </div>
                            <h1>Disponibilidad</h1>
                        </div>
                        <div>
                            <div onClick={()=>setProduct({...product, inStore:!product.inStore})}>
                            <CheckButton checkedButton={product.inStore} />
                            </div>
                            <h1>En Tienda</h1>
                        </div>
                    </div>
                    <div  className='info_size'>
                        <h1 style={fieldsState.size ==="error"? {color:"red"}:{}}>Tamaño</h1>
                        <div>
                            <div>
                                <div onClick={()=>setProduct({...product, size: "S"})}>
                                <RadioButton checkedButton={product.size === "S"? true:false}></RadioButton>
                                <h1>S</h1>
                                </div>
                            </div>
                            <div onClick={()=>setProduct({...product, size: "M"})}>
                                <RadioButton checkedButton={product.size === "M"? true:false}></RadioButton>
                                <h1>M</h1>
                            </div>
                            <div onClick={()=>setProduct({...product, size: "L"})}>
                                <RadioButton checkedButton={product.size === "L"? true:false}></RadioButton>
                                <h1>L</h1>
                            </div>
                            <div onClick={()=>setProduct({...product, size: "U"})}>
                                <RadioButton checkedButton={product.size === "U"? true:false}></RadioButton>
                                <h1>U</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='add_buttons'>
            <Button text = "CANCELAR"
                style = "Cancel"
                action={()=>clickAction("Cancel")}/>
                <Button text = {oldInfo !== undefined? "ACTUALIZAR PRODUCTO":"AGREGAR PRODUCTO"} action={oldInfo !== undefined? updateProduct:createProduct}/>
            </div>
        </div>
    )
}

export default AdminProductAdd