import Movies from "../components/Movies/Movies.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

const App = () => {
    return (
        <div className="app">
            <div className="header">
                <Navbar />
            </div>

            <div className="main">
                <Movies />
            </div>
        </div>
    );
}

export default App;