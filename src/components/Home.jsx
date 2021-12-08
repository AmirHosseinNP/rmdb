import React from "react";
// Components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";
import Searchbar from "./Searchbar/Searchbar";
import Pagination from "./Pagination/Pagination";
import Thumbnail from "./Thumbnail/Thumbnail";
// Hooks
import {useHomeFetch} from "../hooks/useHomeFetch";
import {usePagination} from "../hooks/usePagination";

const Home = () => {
    const {state: movies, loading, error, searchTerm, setSearchTerm, setPage, page} = useHomeFetch();
    const paginationRange = usePagination(movies.total_pages, movies.page);
    
    if (error) return <div className="container py-5 fs-1 text-center">Something went wrong...</div>;

    return (
        <>
            {!searchTerm && !loading && page === 1 ? <HeroImage movies={movies.results.slice(0, 5)}/> : ""}
            <Searchbar setPage={setPage} setSearchTerm={setSearchTerm}/>
            {!loading
                ? (
                    <Grid setPage={setPage} title={searchTerm ? "Search Results" : "Popular Movies"}>
                        {movies.results.map(movie => <Thumbnail key={movie.id} movie={movie}/>)}
                    </Grid>
                )
                : ""
            }
            {!loading
                ? (
                    <Pagination
                        setPage={setPage}
                        currentPage={movies.page}
                        totalPages={movies.total_pages}
                        paginationRange={paginationRange}
                    />
                )
                : <Spinner/>
            }
        </>
    );
}

export default Home;
