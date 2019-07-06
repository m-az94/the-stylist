import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TopNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img
                    src="./logo-transparent.png"
                    width="70"
                    height="50"
                    className="d-inline-block align-top"
                    alt="The Stylist"
                />
            </Link>
            <div>
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Main
                    </li> */}
                    <li className="nav-item">
                        <Link
                            to="/client-dashboard"
                            className={window.location.pathname === "/client-dashboard" ? "nav-link active" : "nav-link"}
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
