import React from "react";
import { AdminMenu, AdminLogin, AdminTable} from "../../components/index";
import './products.css'
function Products(){
    return(
        <div className="products">
            <AdminTable/>
        </div>
    )
}

export default Products;