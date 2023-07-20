import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Skills from './components/Skills';
import Projects from './pages/Projects';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
    </>

);


