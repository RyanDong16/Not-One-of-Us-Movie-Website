import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
import cruiseFilmsLogo from "../assets/Home Photos/cruise_films_logo_ultra_soft_blend2.png";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <button
                className={`menu-toggle ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
                <img
                    src={cruiseFilmsLogo}
                    alt="Cruise Films Logo"
                    className="nav-cruise-films-logo"
                />

                <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Home
                </NavLink>

                <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    About
                </NavLink>

                <NavLink to="/crew" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Crew
                </NavLink>

                <NavLink to="/cast" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Cast
                </NavLink>

                <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Gallery
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;