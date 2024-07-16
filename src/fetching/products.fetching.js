
import { HTTP, URLS } from "./http"


const PRODUCTS_ROUTE = '/api/products'
const CARTS_ROUTE = '/api/carts'

const getProducts = async (page, limit) => {
      try {
        const response = await HTTP.GET(` ${URLS.URL_API + PRODUCTS_ROUTE}?page=${page}&limit=${limit}`)
        
        return response
        
      } catch (error) {
        throw {status: 500 , message: 'No se pudo cargar los productos' }
     
    }
}

const getProductDetailById = async (pid) => {
  
  const response =  await HTTP.GET(URLS.URL_API + PRODUCTS_ROUTE + '/' + pid)
  return  response.producto
}


const addToCart = async (pid, cantidad) => {
  
  const response = await fetch(URLS.URL_API + CARTS_ROUTE + '/', {
      method: 'POST',
      body:{
          product_id: pid, 
          cantidad: cantidad
      },
      headers:{
          'Content-Type': 'aplication/json',
          'Authorization': localStorage.getItem('token')
      }
  })
  .then(res => res.json())
  
}


export { getProducts, addToCart, getProductDetailById }