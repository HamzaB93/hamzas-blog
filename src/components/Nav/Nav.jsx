import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <Link style={navStyle} to='/'><h3>Hamza's Blog</h3></Link>
            <ul className='nav-links'>
                <Link style={navStyle} to='/food'><li>Food</li></Link>
                <Link style={navStyle} to='/comics'><li>Comics</li></Link>
                <Link style={navStyle} to='/games'><li>Games</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;