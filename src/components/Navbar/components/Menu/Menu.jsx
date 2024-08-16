import "./Menu.css";

const Menu = () => {
    return (
        <div className="navbar__menu">
            <ul className="navbar__menu-list">
                <li className="navbar__menu-item">Home</li>
                <li className="navbar__menu-item active">Movies</li>
                <li className="navbar__menu-item">Contacts</li>
                <li className="navbar__menu-item">About</li>
            </ul>
        </div>
    );
}

export default Menu;