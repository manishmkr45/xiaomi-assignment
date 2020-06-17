import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Xiaomi-Cart</Link>
                    
                    <ul className="right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;