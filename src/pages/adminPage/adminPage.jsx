import React, {useState} from "react";
import { AdminMenu, AdminTable } from "../../components/index";
import './adminPage.css'
import { useLocation} from "react-router-dom";

function AdminPage() {
    const { email } = useLocation().state;
    const [section, setSection] = useState("Productos")
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

                        <div>
                            <AdminTable type={section}/>
                        </div>
                    </div>
                </div>)}

        </div>
    )
}

export default AdminPage;