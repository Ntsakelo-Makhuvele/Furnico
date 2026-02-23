import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    // This tells Salesforce to re-evaluate the Sitemap for the new URL
    if (window.SalesforceInteractions) {
      SalesforceInteractions.reinit(); 
    }
  }, [pathname]);

 
  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  )
}

export default App
