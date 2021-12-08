import React, {useEffect, useRef, useState} from 'react';
import PropTypes from "prop-types";
// Styles
import {Icon, Input, InputGroup, Wrapper} from "./Searchbar.styles";

const Searchbar = ({setSearchTerm, setPage}) => {
    const [input, setInput] = useState('');
    const initial = useRef(true);
    const initialFocus = useRef(false);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setPage(1);
            setSearchTerm(input);
        }, 500);

        return () => clearTimeout(timer);
    }, [setSearchTerm, setPage, input]);

    useEffect(() => {
        if (!initialFocus.current) {
            initialFocus.current = true;
            return;
        }
        document.getElementById('search-field').focus();
    }, [input]);

    return (
        <section id="searchbar" className="position-sticky top-0" style={{zIndex: 1000}}>
            <Wrapper className="bg-dark d-flex">
                <div className="container d-flex justify-content-center align-items-center">
                    <InputGroup className="input-group">
                        <Icon className="input-group-text">
                            <i className="fas fa-search"></i>
                        </Icon>
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Search Movie"
                            aria-label="Search movie"
                            onChange={e => setInput(e.currentTarget.value)}
                            value={input}
                            id="search-field"
                        />
                    </InputGroup>
                </div>
            </Wrapper>
        </section>
    );
};

Searchbar.propTypes = {
    setSearchTerm: PropTypes.func,
    setPage: PropTypes.func
};


export default Searchbar;
