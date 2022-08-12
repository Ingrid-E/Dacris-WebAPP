import React, {useState, useEffect} from 'react'
import './adminTable.css'
import {XCircle, CheckLg} from 'react-bootstrap-icons'
import CheckButton from '../adminButtons/checkButton'

const AdminTableRow = (props) => {
    const [checked, setChecked] = useState(false)
    const {checkedProducts, onClick,id,image, category, size, name, description, price, disponibility, onStore, index} = props;
    
    useEffect(() => {
        const isChecked = ()=>{
            if(checkedProducts.includes(id)){
                setChecked(true)
            }
        }
        isChecked()
        currencyFormat(price)
        //eslint-disable-next-line
    }, [])


    const handleClick = () =>{
        setChecked(!checked)
        if(!checked){    
            onClick(id, true)
        }else{
            onClick(id, false)
        }
    }

    const currencyFormat = (money)=> {
        let currency = money.toString();
        console.log("CURRENCY: ", currency)
        //console.log(currency.substring(0,3))
        //console.log(currency.substring(3, currency.length))
        let start = currency.length-3
        for(let i = start-3; i>0; i-=3){
            currency=currency.substring(0, i)+'.'+currency.substring(i, start)
            i++
        }
        console.log("NEW CURRENCY: ", currency)
    }


    return (
            <tr className="admin_table_row" style={checked? {backgroundColor: "#CEEEFF"}: index%2 === 0? {backgroundColor: "white"}: {backgroundColor: "#F2F2F2"}}>
                <td className='table_row_icon' onClick={()=> handleClick()}><CheckButton checkedButton={checked}/></td>
                <td>{image !== undefined? (<div className='table_img'><img src={image} alt={name + " " + category}></img></div>): <div className='table_img'><img src="#" alt="Not loaded"></img></div>}</td>
                <td className='table_longText'>{category !== undefined? category: 'Categoria'}</td>
                <td className='table_shortText'>{size !== undefined? size: 'Tamaño'}</td>
                <td className='table_longText'>{name !== undefined? name: 'Nombre'}</td>
                <td className='table_longText'>{description !== undefined? description: 'Descripcion'}</td>
                <td className='table_longText'>{price !== undefined? '$'+price: 'Precio'}</td>
                <td className='table_icon'>{disponibility !== true? <XCircle/>: <CheckLg/>}</td>
                <td className='table_icon'>{onStore !== true? <XCircle/>: <CheckLg/>}</td>
            </tr>
    )
}

export default AdminTableRow