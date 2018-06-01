import React from 'react';
import SoundCard from './SoundCard';
import soundData from '../sounds/SoundData';
import '../stylesheets/Soundboard.css';

const Soundboard = ({character}) => {
  let sounds = soundData.filter((sound) => sound.character === character).map((sound, index) => (
    <SoundCard key={index} sound={sound.soundPath} title={sound.title} />
  ));
  return (
    <div className="soundboard">
      {sounds}
    </div>
  );
};

export default Soundboard;