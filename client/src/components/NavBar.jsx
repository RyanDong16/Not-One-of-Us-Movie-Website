import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Home
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                About
            </NavLink>

            <NavLink to="/crew" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Crew
            </NavLink>

            <NavLink to="/cast" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Cast
            </NavLink>

            <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Gallery
            </NavLink>
        </nav>
    )

}

export default NavBar;
