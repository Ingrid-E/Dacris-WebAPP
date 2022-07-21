import api from './posts'
import { getCategories } from './categories'

const getProducts = async () => {
    try {
        const response = await api.get('/product')
        if(response && response.data){
            const products = response.data;
            const categories = await getCategories()
            products.forEach(product => {
                categories.find(category => {
                    if(category.pk_category === product.fk_category_product){
                        product.category_name = category.name
                        return
                    }
                })
            });
           return products
        }
    }catch(err){
        console.error(err)
    }
}

export {getProducts}