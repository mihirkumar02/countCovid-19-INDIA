import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-light mb-5">
                  <div className="container">
                        <div className="heading-center">
                            <Link to="/" className="navbar-brand text-dark text-lg bg-light brand-text">
                                <b>Count Covid-19</b>
                                <i className="fas fa-viruses" id="logo"/>
                            </Link>
                        </div>
                        <ul className="navbar-nav text-light d-inline-block">
                            <li className="nav-item d-inline-block mr-3">
                                <NavLink to="/search" className="text-dark text-lg brand-text" id="logo"><i className="fas fa-search"/> Search</NavLink>
                            </li>
                            <li className="nav-item d-inline-block">
                                <NavLink to="/statistics" className="text-dark text-lg brand-text" id="logo"><i className="fas fa-map-marker-alt"/> Map</NavLink>
                            </li>
                            <li className="nav-item d-inline-block ml-3">
                                <NavLink to="/about" className="text-dark text-lg brand-text" id="logo"><i className="fas fa-info-circle"/> About</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
