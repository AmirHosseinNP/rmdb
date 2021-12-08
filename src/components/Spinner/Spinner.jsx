import React from 'react';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: 700}}>
            <div className="spinner-grow text-dark" style={{width: "8rem", height: "8rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
