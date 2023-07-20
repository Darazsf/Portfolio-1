import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import About from './pages/About';
import Skills from './components/Skills';
import Projects from './pages/Projects';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
        <Home />
        <About />
        <Skills />
        <Projects />
    </>

);


