import { getCategories, getCategory} from './categories'
import { getImages, postImage, getProductImages, putImages } from './images'

const baseURL = process.env.REACT_APP_BASEURL

var axios = require('axios');
var qs = require('qs');


const postProduct = async (product) => {

    var data = qs.stringify({
        'name': product.name,
        'description': product.description,
        'price': product.price,
        'size': product.size,
        'id_category': product.category,
        'in_store': product.inStore,
        'available': product.available
    });

    var config = {
        method: 'post',
        url: baseURL + 'product',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Access-Control-Allow-Origin": "*"
        },
        data: data
    };

    const response = await axios(config)
        .then(async function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    let index = 0
    const product_id = response.product_id
    for await (let img of product.images) {
        await postImage(index, img, product_id)
        index++
    }

    console.log("waiting images")
    return response

}

const getBestSellers = async () => {
    var config = {
        method: 'get',
        url: baseURL+'best_sellers',
        headers: {}
    };

    const response = await axios(config)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        });

    let bestSellers = []
    const products = response.products
    if (response.success) {
        for(let product of products){
            let element = await getProduct(product.fk_product_bestseller);
            if(element.images !== undefined) bestSellers.push(element)
        }
        return { success: true, products: bestSellers};
    } else {
        return { success: false }
    }
}



const getNewestProducts = async () => {
    var config = {
        method: 'get',
        url: baseURL+'new_products',
        headers: {}
    };

    const response = await axios(config)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        });

    let newProducts = []
    const products = response.products
    if (response.success) {
        for(let product of products){
            let element = await getProduct(product.fk_product_new);
            if(element.images !== undefined) newProducts.push(element)
        }
        return { success: true, products: newProducts};
    } else {
        return { success: false }
    }
}

const bestSellers_pagination = async (page, limit, filter = '') => {
    try {
        const response = await fetch(baseURL + `best_sellers/pagination?page=${page}&limit=${limit}&filter=${filter}`, {
            method: "GET",
            redirect: 'follow'
        })
        const json = await response.json()
        const products = json.products
        const length = json.length
        console.log("RESPONSE, ",  response)
        console.log("PRODUCTS, ",  products)
        console.log("LRNGTH, ",  length)
        let bestSellers = []
        if (length.count > 0) {
            for(let product of products){
                let element = await getProduct(product.fk_product_bestseller);
                if(element.images !== undefined) bestSellers.push(element)
            }
            console.log("BEST SELLER: ", bestSellers, "LENGTH: ", length)
            return { success: true, products: bestSellers, length: length};
        } else {
            return { success: false }
        }
    } catch (err) {
        console.error("ERROR: ", err)
    }
}


const getProducts = async (page, limit, filter = '') => {
    try {
        const response = await fetch(baseURL + `product/pagination?page=${page}&limit=${limit}&filter=${filter}`, {
            method: "GET",
            redirect: 'follow'
        })
        const json = await response.json()
        const products = json.products
        const length = json.length

        if (products !== undefined && products !== []) {
            for(let product of products){
                const getImages = await getProductImages(product.pk_product)
                const getCategoryInfo = await getCategory(product.fk_category_product)
                product.images = getImages.images
                product.category_name = getCategoryInfo.name
            }
            console.log("PRODUCT PAGINATION: ", length)
            return { products: products, length: length }
        }

    } catch (err) {
        console.error("ERROR: ", err)
    }
}

const deleteProducts = async (products) => {
    products.forEach(async id_product => {
        try {
            await fetch(baseURL + `product/${id_product}`, {
                method: "DELETE",
                redirect: 'follow'
            })

            return true
        } catch (err) {
            console.error(err)
            return false
        }

    })

    return true

}

const getProduct = async (id_product) => {

    var config = {
        method: 'get',
        url: baseURL + `product/${id_product}`,
        headers: {},
    };

    const response = await axios(config)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });

    const getImages = await getProductImages(id_product)
    const getCategoryInfo = await getCategory(response.fk_category_product)
    response.images = getImages.images
    response.category_name = getCategoryInfo.name

    return response;

}

const putProduct = async (product, id) => {
    var data = qs.stringify({
        'name': product.name,
        'description': product.description,
        'price': product.price,
        'size': product.size,
        'id_category': product.category,
        'in_store': product.inStore,
        'available': product.available
    });

    var config = {
        method: 'put',
        url: baseURL + `product/${id}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    const response = await axios(config)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        });
    console.log("IMAGES PENDING: ", product.images)
    const imageResponse = await putImages(product.images, id)

    console.log("IMAGE REWSPONSE: ", imageResponse)
    return imageResponse;

}

export { putProduct, getProducts, deleteProducts, postProduct, getProduct, getBestSellers, getNewestProducts, bestSellers_pagination}