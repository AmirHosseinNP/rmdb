import React from 'react';
import PropTypes from "prop-types";
// Styles
import {Wrapper} from "./Grid.styles";

const Grid = ({children, title}) => {
    return (
        <section id="grid-section" className="pt-4 pb-5">
            <Wrapper className="container">
                <h3 id="grid-section-title" className="fw-bold mb-3">{title}</h3>
                <div
                    id={`${title}-grid`}
                    className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4 gy-md-5 gx-3 gx-sm-4"
                >
                    {children}
                </div>
            </Wrapper>
        </section>
    );
};

Grid.propTypes = {
    title: PropTypes.string
};


export default Grid;
