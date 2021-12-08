import {useEffect, useState} from "react";
// API
import API from "../API";
// Helpers
import {isInSessionStorage} from "../helpers";
import {usePrevious} from "./usePrevious";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const previousPage = usePrevious(page);

    const fetchMovies = async (page, searchTerm) => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);

            setState({...movies});
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    // Initial & Search
    useEffect(() => {
        const sessionState = isInSessionStorage('homeState');
        setState(initialState);

        if (!searchTerm && sessionState && page === previousPage) {
            setState(sessionState);
            return;
        }

        fetchMovies(page, searchTerm);
    }, [page, searchTerm, previousPage]);

    // Write to session
    useEffect(() => {
        if (!searchTerm) {
            sessionStorage.setItem("homeState", JSON.stringify(state));
        }
    }, [searchTerm, state]);

    return {state, loading, error, searchTerm, setSearchTerm, setPage, page};
}