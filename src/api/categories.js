import api from './posts'
const baseURL = 'http://localhost:8080/product_category'

const getCategories = async () => {
    try {
        const response  = await fetch(baseURL, {
            method: 'GET',
            redirect: 'follow'
          })
          const json = await response.json()
          return json
    }catch(err){
        console.error(err)
    }
}

export {getCategories}