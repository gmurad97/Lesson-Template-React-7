import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "movies": [],
    "starred_movies": []
};

const moviesSlice = createSlice({
    "name": "movies",
    "initialState": initialState,
    "reducers": {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        likeMovie: (state, action) => {
            const movie = state.movies.find(movie => movie.id === action.payload)
            if (movie)
                movie.likes += 1;
        },
        dislikeMovie: (state, action) => {
            const movie = state.movies.find(movie => movie.id === action.payload)
            if (movie)
                movie.dislikes += 1;
        },
        starredMovie: (state, action) => {
            const movieExists = state.starred_movies.some(movie => movie.id === action.payload.id)
            if (!movieExists)
                state.starred_movies.push(action.payload);
            else{
                state.starred_movies = state.starred_movies.filter(movie => movie.id !== action.payload.id);
            }
        }
    }
});

export const { setMovies, likeMovie, dislikeMovie, starredMovie } = moviesSlice.actions;
export default moviesSlice.reducer;