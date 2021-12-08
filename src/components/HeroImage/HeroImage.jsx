import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
// Config
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
// Styles
import {Arrow, CarouselImage, Overlay, Wrapper} from "./HeroImage.styles";

const HeroImage = ({movies}) => {
    return (
        <section id="hero-section">
            <Wrapper id="HeroImageCarousel" className="carousel slide carousel-fade" data-bs-interval="false" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {movies.map((movie, i) => (
                        <button
                            type="button"
                            data-bs-target="#HeroImageCarousel"
                            data-bs-slide-to={i}
                            aria-current="true"
                            aria-label={`Slide ${i + 1}`}
                            key={movie.id}
                            className={i === 0 ? "active" : ""}
                        >
                        </button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {movies.map((movie, i) => (
                        <div key={movie.id} className={`carousel-item${i === 0 ? " active" : ""}`}>
                            <Overlay className="d-none d-sm-block"/>
                            <Link to={`/movies/${movie.id}`}>
                                <picture>
                                    <source media="(max-width: 576px)" srcSet={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}/>
                                    <CarouselImage
                                        src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
                                        className="d-block img-fluid"
                                        alt={movie.title}
                                    />
                                </picture>
                            </Link>
                            <div className="carousel-caption mb-2 d-none d-sm-block">
                                <h1 style={{textShadow: "2px 1px 2px black"}}>
                                    <Link className="text-decoration-none text-white" to={`/movies/${movie.id}`}>{movie.title}</Link>
                                </h1>
                                <p style={{textShadow: "2px 1px 2px black", fontSize: 18}}>{movie.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#HeroImageCarousel" data-bs-slide="prev">
                    <Arrow className="fas fa-chevron-left" aria-hidden="true"></Arrow>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#HeroImageCarousel" data-bs-slide="next">
                    <Arrow className="fas fa-chevron-right" aria-hidden="true"></Arrow>
                    <span className="visually-hidden">Next</span>
                </button>
            </Wrapper>
        </section>
    );
}

HeroImage.propTypes = {
    movies: PropTypes.array
};


export default HeroImage;

