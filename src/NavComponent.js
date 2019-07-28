import React from 'react';
import {Nav} from 'react-bootstrap';

export default function NavComponent() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Chia Travels</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                  <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Destinations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">How it works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">sign up</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Dropdown link
                </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Link 1</a>
                                <a className="dropdown-item" href="#">Link 2</a>
                                <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}