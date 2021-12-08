import React from 'react';
import PropTypes from "prop-types";
// Styles
import {Wrapper} from "./Pagination.styles";

const Pagination = ({paginationRange, currentPage, setPage, totalPages}) => {
    return (
        <Wrapper className="container d-flex justify-content-center align-items-center pb-5">
            <nav aria-label="Page navigation">
                <ul className="pagination mb-0 flex-wrap justify-content-center">
                    <li className={`page-item${currentPage === 1 ? " disabled" : ""} prev-page`}>
                        <button type="button" onClick={() => setPage(Math.max(1, currentPage - 1))} className="page-link">
                            <i className="fas fa-angle-double-left"></i>
                        </button>
                    </li>
                    {paginationRange.map(item => (
                        <li
                            key={`item${item}`}
                            className={`page-item${item === currentPage ? ' active' : ''}${item === "..." ? ' disabled' : ''}`}
                        >
                            <button type="button" onClick={() => {
                                setPage(item)
                            }} className="page-link">{item}</button>
                        </li>
                    ))}
                    <li className={`page-item${currentPage === totalPages ? " disabled" : ""} next-page`}>
                        <button type="button" onClick={() => setPage(Math.min(totalPages, currentPage + 1))} className="page-link">
                            <i className="fas fa-angle-double-right"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    );
};

Pagination.propTypes = {
    paginationRange: PropTypes.array,
    currentPage: PropTypes.number,
    setPage: PropTypes.func,
    totalPages: PropTypes.number
};


export default Pagination;
