import React, { useContext, useState } from 'react'
import {AiOutlineUser} from 'react-icons/ai';
import {BsCart4} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import img from "../src/images/logo.svg"
import { useSelector } from 'react-redux';
const Navbar = ({ onSearch}) => {

  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.cart.reduce((total, item) => total + item.quantity, 0);
  console.log('cart',cart);
  

  
  


  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    console.log(searchQuery)
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light sticky-top">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">
    <a class="navbar-brand" href="#">
      <img src={img} alt="Bootstrap" width="150" height="30"/>
    </a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-1 text-bold fw-bold">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link " to='/products' aria-disabled="true">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to='/contact' aria-disabled="true">Contact</Link>
        </li>
      </ul>
      
  



    <Link to='/cart'><BsCart4 class='cart-icon'></BsCart4></Link><span class="badge icon-count bg-primary rounded-pill">{totalQuantity}</span>  

    




       
       <Link to='/login'> <button  type="button" class="btn btn-dark  mx-3"><AiOutlineUser class='user-icon'/>Login</button></Link>
      <form class="d-flex" role="search">
        <input 
          type='text'
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
        
        
        class="form-control me-2"  placeholder="Search" aria-label="Search"/>
       <button  onClick={handleSearch} class="btn btn-outline-success" type="signup">Search</button>  
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
