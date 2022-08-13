import React, {useState} from "react";
import { AdminMenu, AdminTable } from "../../components/index";
import './adminPage.css'
import { useLocation} from "react-router-dom";

function AdminPage() {
    const { email } = useLocation().state;
    const [section, setSection] = useState("products")
    return (
        <div className="admin_page">
            {email === undefined ?
                (<div></div>) :
                (<div className="verified">
                    <AdminMenu current={section}/>
                    <div className="section_container">
                        <div>
                            <h1 className="section_title">Productos</h1>
                            <AdminTable />
                        </div>
                    </div>
                </div>)}

        </div>
    )
}

export default AdminPage;