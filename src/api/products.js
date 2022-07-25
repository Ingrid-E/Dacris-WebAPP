import { getCategories } from './categories'
import { getImages } from './images'
const baseURL = 'https://dacris-backend.herokuapp.com/'


const getProducts = async (page, limit, filter = '') => {
    try {
        const response = await fetch(baseURL+`product/pagination?page=${page}&limit=${limit}&filter=${filter}`, {
            method: "GET",
            redirect: 'follow'
        })
        const json = await response.json()
        const products = json.products
        const length = json.length

        if (products !== undefined && products !== []) {
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

            return {products: products, length: length}
        }

    } catch (err) {
        console.error("ERROR: ", err)
    }
}

const deleteProducts = async(products) => {
        products.forEach(async id_product  => {
            console.log(id_product)
            try{
                const response = await fetch(baseURL+`product/${id_product}`, {
                    method: "DELETE",
                    redirect: 'follow'
                })
                const json = await response.json()
                console.log(json)
                return json
            }catch(err){
                console.error(err)
                return false
            }

        })

}

export { getProducts, deleteProducts}