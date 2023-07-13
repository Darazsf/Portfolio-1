import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    </>

);


