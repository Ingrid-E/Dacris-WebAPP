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
    console.log("Image response, ", response)
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

export { getImages, postImage, getProductImages}