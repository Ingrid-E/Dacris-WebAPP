var axios = require('axios');
var qs = require('qs');
const baseURL = process.env.REACT_APP_BASEURL
console.log("BASE URL ", baseURL)



const loginSubmit = async (user) => {
    console.log(user.email,user.password)
    var data = qs.stringify({
        'email': user.email,
        'password': user.password
    });
    
    var config = {
        method: 'post',
        url: baseURL+'users/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Access-Control-Allow-Origin": "*"
        },
        data: data
    };

    const response = await axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {   
            return error.response.data;
        });
        
        return response;
}

export default loginSubmit;

