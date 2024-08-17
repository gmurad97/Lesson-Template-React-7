import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice.js";


const store = configureStore({
    "reducer": {
        "movies": moviesReducer
    }
});

export default store;