import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import 'Routes' from react-router-dom
import "./styles.css";
import Species from "./Species";
import Home from "./Home"; // Replace "Home" with the component you want to show on the home page

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
                    </ul>
                </nav>
                
                {/* Use 'Routes' to wrap multiple 'Route' components */}
                <Routes>
                    <Route path="/species" element={<Species />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}
