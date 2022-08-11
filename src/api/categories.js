import api from './posts'
const baseURL = 'http://localhost:8080/product_category'

const getCategories = async () => {
    try {
        const response = await api.get('/category')
        if(response && response.data){
           return response.data
        }
    }catch(err){
        console.error(err)
    }
}

export {getCategories}