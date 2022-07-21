import api from './posts'

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