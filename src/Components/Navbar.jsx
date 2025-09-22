import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
    const location = useLocation();

    const handleScroll = (e, id) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            // Navigate to home page first
            window.location.href = `/#${id}`;
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">Health<span>+</span></div>
            <ul className="nav-links">
                <li><Link to="/" onClick={(e) => handleScroll(e, "home")}>Home</Link></li>
                <li><Link to="/" onClick={(e) => handleScroll(e, "services")}>Services</Link></li>
                <li><Link to="/" onClick={(e) => handleScroll(e, "about")}>About</Link></li>
                <li><Link to="/" onClick={(e) => handleScroll(e, "doctors")}>Doctors</Link></li>
                <li><Link to="/" onClick={(e) => handleScroll(e, "contact")}>Contact</Link></li>
                <li><Link to="/appointment">Book Appointment</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
