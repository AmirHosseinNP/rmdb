import React from 'react';
import PropTypes from "prop-types";
// Styles
import {Wrapper} from "./MovieInfo.styles";
// Components
import MovieCard from "../MovieCard/MovieCard";


const MovieInfo = ({movie}) => {
    return (
        <section id="movie-info">
            <Wrapper backdropPath={movie.backdrop_path ? movie.backdrop_path : ""}>
                <div className="container d-flex h-100 align-items-center">
                    <MovieCard movie={movie}/>
                </div>
            </Wrapper>
        </section>
    );
};

MovieInfo.propTypes = {
    movie: PropTypes.object
};

export default MovieInfo;
