import React from 'react';
import PropTypes from "prop-types";
// Config
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
// Image
import noImage from "../../images/no_image.jpg";
// Styles
import {Card} from "./MovieCard.styles";

const MovieCard = ({movie}) => {
    return (
        <Card className="card w-100 border-0">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={`${movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : noImage}`}
                        className="movie-poster img-fluid"
                        alt={movie.title}
                    />
                </div>
                <div className="col-md-8 movie-details px-2 py-md-2">
                    <div className="card-body p-3">
                        <h1 className="card-title mt-md-3 mb-3">{movie.title}</h1>
                        <span className="plot fs-4">PLOT</span>
                        <p className="card-text movie-overview mb-4 mt-3">{movie.overview}</p>
                        <div className="d-flex rating-directors">
                            <div className="rating me-5 d-flex flex-column align-items-center">
                                <span className="mb-2">RATING</span>
                                <span className="rate">{movie.vote_average}</span>
                            </div>
                            <div className="directors d-flex flex-column">
                                <span className="mb-3">DIRECTOR{movie.directors.length > 1 ? "S" : ""}</span>
                                <span>{movie.directors.map((director, index, arr) => `${director.name}${index < arr.length - 1 ? ", " : ""}`)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object
};


export default MovieCard;
