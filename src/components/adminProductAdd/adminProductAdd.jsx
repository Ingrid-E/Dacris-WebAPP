import React, { useEffect, useState} from 'react'
import './adminProductAdd.css'
import FormTextField from '../TextFields/formTextField'
import Button from '../adminButtons/button'
import ProductImageAdd from './productImageAdd'
import DropDown from '../TextFields/dropDown'
import { postProduct, postImage} from '../../api'
import CheckButton from '../adminButtons/checkButton'
import RadioButton from '../adminButtons/radioButton'
import Loading from '../loading/loading'
const AdminProductAdd = (props) => {
    let {state} = props
    const [product, setProduct] = useState({name: '', price: '', category: '', description: '', images: [], available:false, inStore:false, size: ''})
    const [fieldsState, setFieldsState] = useState({name: "normal", price: "normal", category: "normal", description: "normal", images: "normal", available:"normal", inStore: "normal", size: "normal"})
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

    }, [loading])

    const handleKeyPress = async (e, name) => {
        setProduct({...product, [name]: e.target.value})
    }

    const loadImages = async (image) => {
        await setProduct({...product, images: [...product.images, image]})
    }


    const createProduct = async () => {
        //console.log("Product Being Clicked")
        if(checkValues()){
            setLoading(true)
            const response = await postProduct(product)
            console.log("RESPONSE: ", response)
            if(response.success){
                setLoading(false)
            }
            
        }
    }

    const checkValues = () => {
        let completed = true
        Object.entries(product).forEach(([key,value])=>{
            if(value === '' ||value.length === 0){
                console.log(key, value)
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
        <div className="admin_product_add">
            {loading? (<div className='loading_overlay'>
                <Loading/>
                </div>
            
           ): <div/>}
        
            <div className='product_data'>
                <div className='add_image'>
                    <ProductImageAdd returnImages={loadImages} state={fieldsState.images}/>
                </div>
                <div className='add_information'>
                    <FormTextField
                    title = "Nombre"
                    action={(e) => handleKeyPress(e, "name")}
                    type = "value"
                    state = {fieldsState.name}/>
                    <FormTextField
                    title = "Precio"
                    action={(e) => handleKeyPress(e, "price")}
                    type = "number"
                    state={fieldsState.price}/>
                    <DropDown
                    title = "Categoria"
                    state={fieldsState.category}
                    action={(e) => handleKeyPress(e, "category")}
                    />
                    <FormTextField
                    title = "Descripcion"
                    size = "big"
                    action={(e) => handleKeyPress(e, "description")}
                    type = "value"
                    state={fieldsState.description}/>
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
                        <h1 style={fieldsState.size ==="error"? {color:"darkred"}:{}}>Tamaño</h1>
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
                style = "Cancel"/>
                <Button text = "AGREGAR PRODUCTO" action={createProduct}/>
            </div>
        </div>
    )
}

export default AdminProductAdd