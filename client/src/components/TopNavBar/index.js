import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TopNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Stylist
          </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Main
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/dashboard"
                            className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
                        >
                            Dashboard
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/profile"
                            className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
                        >
                            Profile
                </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopNavbar;
