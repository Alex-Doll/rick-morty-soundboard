import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/About.css';

const About = () => (
  <div className='about'>
    <h1>Hi there! This is the About page!</h1>
    <p>I need to fill this page out later with text about the page. See you then!</p>
    <Link className='button' to='/'>Back to the soundboard</Link>
  </div>
);

export default About;