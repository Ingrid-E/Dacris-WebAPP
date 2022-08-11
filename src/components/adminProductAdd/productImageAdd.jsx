import React, { useState, useEffect } from 'react'
import ImageButton from '../adminButtons/imageButton'
import './productImageAdd.css'
import { FileArrowUp } from 'react-bootstrap-icons'
import { ThreeDotsVertical } from 'react-bootstrap-icons'
import OptionMenu from '../confirmationPopOut/optionMenu'
import { TrashFill, FileEarmarkArrowUp} from 'react-bootstrap-icons'

const ProductImageAdd = (props) => {
    const [images, setImages] = useState([])
    const [index, setIndex] = useState(0)
    const [popout, setPopOut] = useState({state:'close'})
    const { returnImages, state, files } = props

    useEffect(() => {
        if (files.length > 0) {
            imgReader(files)
        }
    }, [files])

    useEffect(() => {
    }, [images, index])

    const fileReader = async (e) => {
        let file = e.target.files[0];
        returnImages(file)
        let reader = new FileReader()
        reader.onload = function (e) {
            setImages([...images, e.target.result])
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const imgReader = async (files) => {
        files.forEach((image) => {
            setImages([...images, image.url])
        })

    }

    const PopOutState = async (status)=>{
        await setPopOut({state: status})
        renderPopOut()
        return true
    }

    const renderPopOut = () => {
        if(popout.state != 'close'){
            return (
                <OptionMenu options = {[{label: "Eliminar", icon: (<TrashFill/>)},{label: "Cambiar", icon: (<FileEarmarkArrowUp/>)}]}/>
            )
        }

        return <div></div>
    }

    return (
        <div className="product_add_images" >
            <div className="product_images">
                <div className='images_contaniner'>

                    {images[0] !== undefined ?
                        (<div className='images_space'>
                            <img width="200px" src={images[index] === undefined ? '#' : images[index]}></img>
                            <div className='image_index'>
                                {
                                    images.map((image, i) => (
                                        <button key={i} style={index === i ? { background: "#115E83" } : { background: "white" }} onClick={() => setIndex(i)}></button>
                                    ))
                                }
                            </div>
                        </div>)
                        : (<div className='images_placeholder' style={state === "error" ? { border: "2px dashed red" } : { border: "2px dashed darkgray" }}>
                            <div className='placeholder_content' >
                                <FileArrowUp />
                                <h1>Subir Imagen</h1>
                            </div>
                        </div>)}

                </div>
                <div className='image_options' onMouseLeave={()=> PopOutState('close')}>
                    <div onClick={() => PopOutState('open')} >
                        <ThreeDotsVertical/>
                    </div>
                {renderPopOut()}
                </div>
            </div>
            <ImageButton text="SUBIR IMAGEN" sendFile={fileReader} />
        </div>
    )
}

export default ProductImageAdd