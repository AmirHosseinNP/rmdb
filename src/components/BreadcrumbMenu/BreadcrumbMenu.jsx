import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import {Wrapper} from "./BreadcrumbMenu.styles";

const BreadcrumbMenu = ({movieTitle}) => {
    return (
        <Wrapper>
            <div className="container d-flex h-100 align-items-center">
                <nav aria-label="breadcrumb-menu">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{movieTitle}</li>
                    </ol>
                </nav>
            </div>
        </Wrapper>
    );
};

BreadcrumbMenu.propTypes = {
    movieTitle: PropTypes.string
};

export default BreadcrumbMenu;
