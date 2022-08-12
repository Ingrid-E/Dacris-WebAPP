import { uploadImage } from './s3_images';
const baseURL = 'http://localhost:8080/'
var axios = require('axios');
var qs = require('qs');

const getImages = async () => {
    try {
        const response = await fetch(baseURL + "product_images", {
            method: 'GET',
            redirect: 'follow'
        })
        const json = await response.json()
        return json
    } catch (err) {
        console.error(err)
    }
}

const getProductImages = async (pk_product) => {

    var config = {
        method: 'get',
        url: `${baseURL}product_images/${pk_product}`,
        headers: {}
    };

    const response = await axios(config)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        });
    return response
}

const postImage = async (position, img, product_id) => {
    let imgURL = await uploadImage(img)

    console.log("IMAGE URL: ", imgURL)
    var data = qs.stringify({
        'product_id': product_id,
        'position': position,
        'url': imgURL
    });
    var config = {
        method: 'post',
        url: 'http://localhost:8080/product_images',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    const response = await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });

    return response
}

const deleteImage = async (image_id) => {
    var config = {
        method: 'delete',
        url: `${baseURL}product_images/${image_id}`,
        headers: {}
    };

    const response = await axios(config)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        });

    return response

}

const putImages = async (images, product_id) => {
    const oldImages = await getProductImages(product_id)
    let response = {success: true}
    console.log(images)
    if (oldImages.success) {
        oldImages['images'].forEach((old) => {
            let included =  isIncluded(images, old)
            if (old instanceof Object && !included) {
                response = deleteImage(old.pk_image)
            }
        })
    }

    images.forEach((image, index) => {
        if (image instanceof File) {
            //console.log("NEW IMAGES FOR ADDING: ", images)
            response = postImage(index, image, product_id)
        }
    })
    console.log("PUT IMAGES: ", response)
    return response

}

const isIncluded = (newImages, oldImage) => {
    let response = false
    newImages.forEach((image) => {
        if (image === oldImage.url || (image.url !== undefined && image.url === oldImage.url)) {
            response = true;
        }
    })
    return response

}

export { getImages, postImage, getProductImages, putImages }