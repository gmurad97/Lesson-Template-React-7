import "./Logo.css";
import LogoSvg from "./assets/img/logo.svg";

const Logo = () => {
    return (
        <figure className="navbar__logo">
            <img className="navbar__logo-img" src={LogoSvg} alt="Logo" />
        </figure>
    );
}

export default Logo;