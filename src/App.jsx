import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import Projects from './routes/Projects'
import Resume from './routes/Resume'

export default function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/resume" element={<Resume />}/>
            </Routes>
        </Router>
    )
}