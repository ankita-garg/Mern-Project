import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

return(
    <nav className='nav-wrapper purple darken-4'>
        <div className='container'>
            <Link to="/" className='blog-logo'>Blog on Social Awareness</Link>
            {/*LINK TO is just like a href but diff is that it doesn't refresh whole page as not navbar just the content*/}
            <ul className='right'>
                <li><a href="/">Home</a></li>
                <li><Link to="/campaign">Campaigns</Link></li>
                <li><Link to="/Donate">Donate</Link></li>
                <li><NavLink to="/contact">Contact</NavLink></li>  {/*Navlink is for some styling in navbar*/}
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </nav>

  )
}

export default Navbar;
