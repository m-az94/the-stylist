import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from '../../logo-transparent.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TopNavbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a class="navbar-brand" href="/">The Stylist</a>
            <img
                src={logo}
                width="70"
                height="50"
                className="d-inline-block align-top"
                alt="The Stylist"
            />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNavDropdown" class="navbar-collapse collapse">
                <ul class="navbar-nav mr-auto">
                </ul>
                <ul class="navbar-nav">
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                    </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                        </div>
                    </li> */}
                    <li class="nav-item" id="signIn">
                        <Link to="/login"
                            className={window.location.pathname === "/login" ? "nav-link" : "nav-link"}
                        > Log in</Link>
                    </li>
                    <li class="nav-item" id="signUp">
                        <Link to="/register"
                            className={window.location.pathname === "/register" ? "nav-link" : "nav-link"}
                        >Get Started
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopNavbar;
