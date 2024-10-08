
import React, { useState } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Footer from './Components/Footer/Footer';
import Testimonial from './Components/Testimonials/Testimonial';


function App() {
  return (
    <div >
      <section id="home">
        <h1>asdasd</h1>
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="footer">
        <Testimonial />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;

