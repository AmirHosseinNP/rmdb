import React from 'react';
import {Link} from "react-router-dom";

// Logos
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import {LogoImg, TMDBLogoImg} from "./Header.styles";


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <LogoImg src={RMDBLogo} alt="rmdb-logo"/>
                </Link>
                <a className="navbar-brand" rel="nofollow" href="https://www.themoviedb.org/">
                    <TMDBLogoImg src={TMDBLogo} alt="tmbd-logo"/>
                </a>
            </div>
        </nav>
    );
};

export default Header;
