import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/About.css';

const About = () => (
  <div className='about'>
    <h1>Hi there! This is the About page!</h1>
    <p>This is just a fun soundboard built using React to play quotes from the TV show "Rick and Morty."</p>
    <p>I do not own this content in any way and is created under the auspices of Fair Use copyright doctrine. 
    I am making no money on these clips and nor should anyone other than the original copyright holders. 
    Come on and don't be a Jerry and ruin it for the rest of us.</p>
    <Link className='button' to='/'>Back to the soundboard</Link>
  </div>
);

export default About;