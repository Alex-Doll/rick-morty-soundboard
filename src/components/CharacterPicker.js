import React, {Component} from 'react';
import Soundboard from './Soundboard';
import characters from '../data/CharacterData';
import '../stylesheets/CharacterPicker.css';

class CharacterPicker extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currCharacter: 'Rick Sanchez'
    };
  }
  
  handleChange = (event) => {
    this.setState({
      currCharacter: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
  }
  
  render() {
    let characterOptions = characters.map((character, index) => (
      <option className="character-option" key={index} value={character.name}>{character.name}</option>
    ));
    let currCharacterObj = characters.filter((character) => character.name === this.state.currCharacter)[0];
    
    return (
      <div className="character-picker">
        <div className="character-content">
          <img className="character-image" src={currCharacterObj.imageUrl} alt={currCharacterObj.name} />
          <form className="character-menu" onSubmit={this.handleSubmit}>
              <select onChange={this.handleChange}>
                {characterOptions}
              </select>
          </form>
        </div>
        <Soundboard className="soundboard" character={this.state.currCharacter} />
      </div>
    );
  }
}

export default CharacterPicker;