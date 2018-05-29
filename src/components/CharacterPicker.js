import React, {Component} from 'react';
import Soundboard from './Soundboard';
import characters from '../data/CharacterData';

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
      <option key={index} value={character.name}>{character.name}</option>
    ));
    let currCharacterObj = characters.filter((character) => character.name === this.state.currCharacter)[0];
    
    return (
      <div>
        <img src={currCharacterObj.imageUrl} alt={currCharacterObj.name} />
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            {characterOptions}
          </select>
        </form>
        <Soundboard character={this.state.currCharacter} />
      </div>
    );
  }
}

export default CharacterPicker;