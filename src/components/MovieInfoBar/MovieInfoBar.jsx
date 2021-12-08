import React from 'react';
import PropTypes from "prop-types";
// Styles
import {Content, Wrapper} from "./MovieInfoBar.styles";
// Helpers
import {calcTime, convertMoney} from "../../helpers";

const MovieInfoBar = ({budget, revenue, runtime}) => {
    return (
        <Wrapper className="d-flex align-items-center">
            <Content className="container py-4">
                <div className="row gy-4">
                    <div className="col-md">
                        <p>Running time: {calcTime(runtime)}</p>
                    </div>
                    <div className="col-md">
                        <p>Budget: {convertMoney(budget)}</p>
                    </div>
                    <div className="col-md">
                        <p>Revenue: {convertMoney(revenue)}</p>
                    </div>
                </div>
            </Content>
        </Wrapper>
    );
};

MovieInfoBar.propTypes = {
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
};


export default MovieInfoBar;
