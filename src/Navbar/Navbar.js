import React from "react";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'
export default function Navbar() {

    const [checknav, changenav] = useState(0);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand" onClick={() => changenav(0)}>Portfolio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav-options">
                    <Link to={'/todos'} className={checknav == 1 ? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => changenav(1)}> Todos </Link>
                    <Link to={'/feedback'} className={checknav == 2 ? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => changenav(2)}> Feedback </Link>
                </div>
            </div>
        </nav>


    );
}