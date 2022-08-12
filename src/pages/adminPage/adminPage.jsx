import React from "react";
import { AdminMenu, AdminLogin, AdminTable} from "../../components/index";
import './adminPage.css'
function AdminPage(){
    return(
        <div className="admin_page">
            <AdminMenu/>
            <div className="section_container">
                <div>
                    <h1>Productos</h1>
                    <AdminTable/>
                </div>
            </div>
        </div>
    )
}

export default AdminPage;