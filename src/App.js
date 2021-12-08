import React from 'react';
// Routing
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// Components
import Header from "./components/Header/Header";
// Routes
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
// Styles
import {GlobalStyle} from "./GlobalStyles";

const App = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies/:movieId" element={<Movie/>}/>
            <Route path="/movies/*" element={<NotFound/>}/>
        </Routes>
        <GlobalStyle/>
    </Router>
);

export default App;
