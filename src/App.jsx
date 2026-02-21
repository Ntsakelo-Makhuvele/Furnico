import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import Cart from './pages/Cart'


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
