import React, {useState}from 'react'
import './adminCheckButton.css'


const AdminCheckButton = () => {
    const [checked, setChecked] = useState(false)
    return (
        <div className="admin_checkButton" 
        onClick={()=>{setChecked(!checked)}} 
        style={checked? {backgroundColor: "#115E83"}:
                        {backgroundColor: "white"}}>
            
        </div>
    )
}

export default AdminCheckButton