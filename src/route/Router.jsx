import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Register from '../pages/Register'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={ <Home/> } />
        <Route path='login' element={ <Login /> } />
        <Route path='register' element={ <Register /> } />
        <Route path='product' element={ <Products /> } />
        <Route path='*' element={ <Home /> } />
      </Route>
    </Routes>
  )
}

export default Router