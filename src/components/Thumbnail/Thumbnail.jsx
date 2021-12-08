import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import {Image} from "./Thumbnail.styles";
// Config
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
// Image
import noImage from "../../images/no_image.jpg"

const Thumbnail = ({movie}) => {
    return (
        <div className="col">
            <Link to={`/movies/${movie.id}`}>
                <Image
                    src={`${movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : noImage}`}
                    alt={movie.title}
                    className="img-fluid h-100"
                />
            </Link>
        </div>
    );
};

Thumbnail.propTypes = {
    movie: PropTypes.object
};


export default Thumbnail;
