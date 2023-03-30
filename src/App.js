import React from 'react';
import About from './components/About';
import About2 from './components/About2';
import Bannerone from './components/Bannerone';
import Community from './components/Community';
import Community2 from './components/Community2';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Main from './components/Main';
import {Navbar} from './components/Navbar';
import Questions from './components/Questions';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className='App'>
      <Navbar /> 
      <Main />      
      <Bannerone />
      <About />
      <About2 />
      <Courses />
      <Testimonial />
      <Community />
      <Community2 />
      <Questions />    
      <Footer />  
    </div>
  );
}

export default App;
