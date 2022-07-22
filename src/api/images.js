import api from './posts'

const getImages = async () => {
    try {
        const response = await api.get('/image')
        if(response && response.data){
           return response.data
        }
    }catch(err){
        console.error(err)
    }
}

export {getImages}