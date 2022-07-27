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

const uploadImage = async () => {
    try {

    }catch(err){
        
    }
}

export {getImages}