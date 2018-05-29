import React from 'react';
import SoundCard from './SoundCard';
import soundData from '../sounds/SoundData';

const Soundboard = ({character}) => {
  let sounds = soundData.filter((sound) => sound.character === character).map((sound, index) => (
    <SoundCard key={index} sound={sound.soundPath} title={sound.title} />
  ));
  return (
    <div>
      <h1>Hello from the Soundboard!</h1>
      {sounds}
    </div>
  );
};

export default Soundboard;