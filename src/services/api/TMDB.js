import axios from "axios";
import { TMDB_API_URL, TMDB_API_KEY } from "../../utils/constants.js";

class TMDB {
    static getPopularMovies = async () => {
        const url = new URL("movie/popular", TMDB_API_URL);
        url.searchParams.append("api_key", TMDB_API_KEY);

        try {
            const response = await axios.get(url, {
                "headers": {
                    "Accept": "application/json"
                }
            });
            return response.data.results;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }
}

export default TMDB;