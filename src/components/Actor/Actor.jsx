import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {Image, Text, Wrapper} from "./Actor.styles";
// Config
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
// No Image
import noImage from "../../images/no_image.jpg";

const Actor = ({actor}) => {
    return (
        <div className="col">
            <Wrapper className="card h-100">
                <Image
                    src={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : noImage}
                    className="card-img-top"
                    alt={actor.name}
                />
                <Text className="card-body">
                    <h3 className="card-title fs-4">{actor.name}</h3>
                    <p className="card-text fs-6">{actor.character}</p>
                </Text>
            </Wrapper>
        </div>
    );
};

Actor.propTypes = {
    actor: PropTypes.object
}

export default Actor;
