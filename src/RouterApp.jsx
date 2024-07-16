import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/Register.screen'
import HomeScreen from './screens/home/HomeScreen'
import { verificarToken } from './fetching/auth.fetching'
import DetailScreen from './screens/products/DetailScreen'
import ProductsScreen from './screens/products/ProductsScreen'
import Cart from './screens/cart/Cart'

const RouterApp = () => {

  /*const navigate = useNavigate()
    useEffect( () => {
      verificarToken()
      .then (resultado => {
      if(resultado.ok){// chequear status: 200 para hacer if(resultado==200){}
        navigate('/home')
      }
      else{
        navigate('/login')
      }
     })
    }
    ,[]
    )*/
  

  return (
    <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/' element={<LoginScreen />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<ProductsScreen />} />
        <Route path='/detail/:pid' element={<DetailScreen />} />

    </Routes>
  )
}

export default RouterApp