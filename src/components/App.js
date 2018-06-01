import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Navbar';
import CharacterPicker from './CharacterPicker';
import About from './About';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path='/' component={CharacterPicker} />
            <Route path='/about' component={About} />
            <Footer className='footer'/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
