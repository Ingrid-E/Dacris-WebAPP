const baseURL = process.env.REACT_APP_BASEURL
var axios = require('axios');
var FormData = require('form-data');


const uploadImage = async (file_img) => {
    var data = new FormData();
    const header = new Headers({ "Access-Control-Allow-Origin": "*" })
    data.append("image-upload", file_img, "C:/fake/"+file_img.name);
    
    var config = {
        method: 'post',
        url: baseURL+'s3_image',
        headers: header,
        data: data
    };

    const response = await axios(config)
        .then( function (response)  {
            console.log(response.data);
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    return response.location

}

export { uploadImage }