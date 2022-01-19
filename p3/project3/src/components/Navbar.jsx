import React from "react";
import {Link} from 'react-router-dom';
import './styles/Navbar.css';

function Navbar(){
    return <nav className="navbar bg-dark container">
        <h4><Link className="link" to="/">home</Link></h4>
        <h4><Link className="link" to="/notes">notes</Link></h4>
        <h4><Link className="link" to="/create">create note</Link></h4>
    </nav>
}

export default Navbar;