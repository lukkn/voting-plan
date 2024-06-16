
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create a CSS file for styling

function Navbar(props) {
  return (
    <nav className="navbar">
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/badges">Badges</Link></li>
                <li><Link to="/character">Character</Link></li>
                <li><Link to="/friends">Friends</Link></li>
            </ul>
        </div>
        <button onClick={props.logout}>Log Out</button>
    </nav>
  );
};

export default Navbar;

