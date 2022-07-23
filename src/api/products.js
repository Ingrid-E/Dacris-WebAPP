import api from './posts'
import { getCategories } from './categories'
import { getImages } from './images'
var qs = require('qs');

const getProducts = async (filter = '') => {
    try {
        let response
        const headers = { 
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        if(filter !== ''){
            console.log("Filter is not empty")

            const data  = {
                filter: "Mini"
            }




            response = await api.get('/product', data, headers)
            console.log("Response API: ", response)
        
        }

        if (response && response.data) {
            const products = response.data;
            const categories = await getCategories()
            const images = await getImages()
            products.forEach(product => {
                let product_images = []
                categories.find(category => {
                    if (category.pk_category === product.fk_category_product) {
                        product.category_name = category.name
                        return true
                    }
                    return false
                })

                images.forEach(image => {
                    if (image.fk_product_images === product.pk_product) {
                        product_images.push(image)
                    }
                })

                product.images = product_images
            });

            console.log(products)
            return products
        }
    } catch (err) {
        console.error(err)
    }
}

export { getProducts }