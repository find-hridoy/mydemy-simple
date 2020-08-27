import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <div className="header">
            <nav className="navbar navbar-light text-dark p-3">
                <div className="container">
                    <a className="navbar-brand"><strong>Mydemy</strong></a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2 m-auto" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success signIn-btn">Sign In</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;