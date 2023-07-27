import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import Species from "./Species";
import People from './People'

export default function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/species">Species</Link>
                        </li>
                        <li>
                            <Link to="/people">People</Link>
                        </li>
                    </ul>
                </nav>
                
                {/* Use 'Routes' to wrap multiple 'Route' components */}
                <Routes>
                    <Route path="/species" element={<Species />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}
