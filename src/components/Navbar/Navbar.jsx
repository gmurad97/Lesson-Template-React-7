import "./Navbar.css";
import Logo from "./components/Logo/Logo.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Control from "./components/Control/Control.jsx";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Logo />
            <Menu />
            <Control />
        </nav>
    );
}

export default Navbar;