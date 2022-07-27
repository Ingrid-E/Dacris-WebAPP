import { render } from '@testing-library/react'
import React from 'react'
import './buttons.css'


const ImageButton = (props) => {
    const {text, sendURL} = props
    const sendImage = (e)=> {
        let reader = new FileReader()
        reader.onload = function(e) {
            sendURL(e.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className="admin_imageButton">
            <label htmlFor="product_img">
                {text}
                <input type="file" id="product_img"
                accept='image/png, image/jpeg'
                onChange={sendImage}
                />
            </label>

        </div>
    )
}

export default ImageButton