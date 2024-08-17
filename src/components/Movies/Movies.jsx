import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Movies.css";
import TMDB from "../../services/api/TMDB";
import { setMovies, likeMovie, dislikeMovie, starredMovie } from "../../store/slices/moviesSlice.js";

const Movies = () => {
    const movies = useSelector(state => state.movies.movies);
    const starred_movies = useSelector(state => state.movies.starred_movies);
    const dispatch = useDispatch();

    console.log(starred_movies)
    useEffect(() => {
        TMDB.getPopularMovies().then(movies => {
            const modifiedMovies = movies.map(movies => ({
                ...movies,
                likes: Math.floor(Math.random() * (100 - 20 + 1) + 20),
                dislikes: Math.floor(Math.random() * (100 - 20 + 1) + 20)
            }));
            dispatch(setMovies(modifiedMovies));
        });
    }, []);

    const isStarred = (id) => {
        return starred_movies.some(starredMovie => starredMovie.id === id);
    }

    return (
        <section className="section__movies">
            {movies.map((movie, idx) => (
                <div className="movies__item" key={idx}>
                    <div className="movies__item-header">
                        <div className="movies__item-header-img-wrapper">
                            <img
                                className="movies__item-header-img"
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt="Movie Thumbnail"
                            />
                        </div>
                    </div>
                    <div className="movies__item-body">
                        <h1 className="movies__item-body-title">{movie.original_title}</h1>
                        <p className="movies__item-body-description">{movie.overview}</p>
                    </div>
                    <div className="movies__item-footer">
                        <div className="movies__item-footer-like" onClick={() => dispatch(likeMovie(movie.id))}>
                            <i className="fi fi-rr-social-network"></i>
                            <span className="movies__item-footer-like-count">{movie.likes}</span>
                        </div>
                        <div className="movies__item-footer-dislike" onClick={() => dispatch(dislikeMovie(movie.id))}>
                            <i className="fi fi-rr-hand"></i>
                            <span className="movies__item-footer-like-count">{movie.dislikes}</span>
                        </div>
                        <div
                            className="movies__item-footer-starred"
                            onClick={() => dispatch(starredMovie(movie))}
                            style={{ color: isStarred(movie.id) ? "gold" : "" }}
                        >
                            <i className="fi fi-rr-star"></i>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Movies;