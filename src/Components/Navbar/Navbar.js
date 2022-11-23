import "./navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="menu-container">
                <div className="nav-left">
                    <NavLink className="logo-container" to="/">
                        <img 
                            src={require("../../Images/Tugatog-Logo-Black.png")} 
                            alt="Logo" 
                            className="logo"
                        />
                    </NavLink>
                    <NavLink className='navlink-item' to="/our-peaks">Our Peaks</NavLink>
                    <NavLink className='navlink-item' to="/my-adventures">My Adventures</NavLink>
                    <NavLink className='navlink-item' to="/my-profile">My Profile</NavLink>
                </div>
                <div className="nav-right">
                    <NavLink className='navlink-itemright' to="/login"> Log In</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar