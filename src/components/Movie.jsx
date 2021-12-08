import React from 'react';
// Components
import BreadcrumbMenu from "./BreadcrumbMenu/BreadcrumbMenu";
import Spinner from "./Spinner/Spinner";
import MovieInfo from "./MovieInfo/MovieInfo";
// Hooks
import {useMovieFetch} from "../hooks/useMovieFetch";
import {useParams} from "react-router-dom";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Grid from "./Grid/Grid";
import Actor from "./Actor/Actor";

const Movie = () => {
    const {movieId} = useParams();
    const {movie, loading, error} = useMovieFetch(movieId);

    if (loading) return <Spinner/>
    if (error) return <div className="container py-5 fs-1 text-center">{error}</div>

    return (
        <>
            {Object.keys(movie).length
                ? (
                    <>
                        <BreadcrumbMenu movieTitle={movie.title}/>
                        <MovieInfo movie={movie}/>
                        <MovieInfoBar budget={movie.budget} revenue={movie.revenue} runtime={movie.runtime} />
                        <Grid title="Actors">
                            {movie.actors.map(actor => <Actor key={actor.cast_id} actor={actor}/>)}
                        </Grid>
                    </>
                )
                : ""
            }
        </>
    );
};

export default Movie;
