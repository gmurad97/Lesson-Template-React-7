import "./Control.css";
import { useSelector } from "react-redux";

const Control = () => {
    const starred_movies = useSelector(state => state.movies.starred_movies);

    return (
        <div className="navbar__control">
            <div className="navbar__control-item">
                <div className="navbar__control-item-icon">
                    <i className="fi fi-rr-shopping-cart"></i>
                </div>
                <span className="navbar__control-item-badge">{starred_movies.length}</span>
            </div>
        </div>
    );
}

export default Control;