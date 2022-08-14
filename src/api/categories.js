const baseURL = process.env.REACT_APP_BASEURL

const getCategories = async () => {
    try {
        const response  = await fetch(baseURL + 'product_category', {
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