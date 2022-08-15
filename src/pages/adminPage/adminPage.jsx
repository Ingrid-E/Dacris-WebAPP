import React, {useState} from "react";
import { AdminMenu, AdminTable } from "../../components/index";
import './adminPage.css'
import { useLocation} from "react-router-dom";

function AdminPage() {
    const { email } = useLocation().state;
    const [section, setSection] = useState("products")
    const changeSection = (change) =>{
        setSection(change)
    }

    return (
        <div className="admin_page">
            {email === undefined ?
                (<div></div>) :
                (<div className="verified">
                    <AdminMenu current={section} change={changeSection}/>
                    <div className="section_container">
                        <div style={section === 'products'? {}:{display:'none'}}>
                            <h1 className="section_title">Productos</h1>
                            <AdminTable type="products"/>
                        </div>
                        <div style={section === 'images'? {}:{display:'none'}}>
                            <h1 className="section_title">Mas Vendidos</h1>
                            <AdminTable type="bestSellers"/>
                        </div>
                    </div>
                </div>)}

        </div>
    )
}

export default AdminPage;