import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import BranchDropdown from '../BranchDropDown/BranchDropDown';
import SearchBar from '../Searchbar/Searchbar'

const Navbar = () => {
    return (
        <>
            <div className="mainNav">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <img className="greenleaf-logo" src={`${process.env.PUBLIC_URL}/Images/GreenLeafMainLogo.svg`} alt="greenmart logo" />
                        <span className="logo-text">Green Leaf Super</span>
                    </div>
                    <ul className="navbar-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="navbar-right">
                        <BranchDropdown id='braanch' editable={true} />
                        <Link to="/login" className="navbar-login">Login</Link>
                        <Link to="/cart" className="navbar-cart"><FaShoppingCart size='18px' /></Link>
                    </div>

                </nav>
                <div className="navbar-bottom-searchbar">
                    <SearchBar />
                </div>
            </div>
        </>
    );
};

export default Navbar;
