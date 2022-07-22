import api from './posts'
import { getCategories } from './categories'
import { getImages } from './images'
const getProducts = async () => {
    try {
        const response = await api.get('/product')
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