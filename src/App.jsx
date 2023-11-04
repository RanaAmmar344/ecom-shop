import React from 'react'
import './App.css'
import Navbar from '../compnents/Navbar';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import AddCart from '../src/pages/AddCart';
import Checkout from '../src/pages/Checkout';
import Contact from '../src/pages/Contact';
import Login from '../src/pages/Login';
import ProductDetails from '../src/pages/ProductDetails';
import Products from '../src/pages/Products';
import Signup from '../src/pages/Signup';
import {  Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };


 
  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    fetchData();
  }, []);

  return (
    <>
     
        <Navbar onSearch={handleSearch} />
    <Routes>
      
        
          <Route path="/" element={< Home />} /> 
          <Route path="/about" element={<About/>} />
          <Route  path="/products" element={<Products productcard={products} searchQuery={searchQuery} />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product-details/:id" element={<ProductDetails/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cart" element={<AddCart/>} /> 
          <Route path="/checkout" element={<Checkout/>} />
          
          
        
     
    </Routes>
    
    
    </>
  )
}

export default App
