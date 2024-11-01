import React, { useContext, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import img from "../src/images/logo.svg";
import { useSelector } from 'react-redux';

const Navbar = ({ onSearch }) => {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.cart.reduce((total, item) => total + item.quantity, 0);

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={img} alt="Logo" width="150" height="30" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-1 text-bold fw-bold">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/products'>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contact'>Contact</Link>
              </li>
            </ul>
            <Link to='/cart'>
              <BsCart4 className='cart-icon' />
            </Link>
            <span className="badge icon-count bg-primary rounded-pill">{totalQuantity}</span>
            <Link to='/login'>
              <button type="button" className="btn btn-dark mx-3">
                <AiOutlineUser className='user-icon' />Login
              </button>
            </Link>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
