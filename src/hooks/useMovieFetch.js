import {useEffect, useState} from "react";
// API
import API from "../API";

export const useMovieFetch = movieId => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchMovie = async () => {
            try {
                setLoading(true);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                // Get Directors
                const directors = credits.crew.filter(member => member.job === 'Director');

                setMovie({...movie, actors: credits.cast, directors});
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        }

        fetchMovie();
    }, [movieId]);

    return {movie, loading, error};
}
