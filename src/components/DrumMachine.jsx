import React,{ useState } from "react";
import Display from "./Display";
import DrumPad from "./DrumPad";

import '../stylesheet/DrumMachine.css';

const drumPads = [
  {
      "key": "Q",
      "song": "Heater-1",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
      "key": "W",
      "song": "Heater-2",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
      "key": "E",
      "song": "Heater-3",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
      "key": "A",
      "song": "Heater-4",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
      "key": "S",
      "song": "Heater-6",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
      "key": "D",
      "song": "Dsc_Oh",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
      "key": "Z",
      "song": "Kick_n_Hat",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
      "key": "X",
      "song": "RP4_KICK_1",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
      "key": "C",
      "song": "Cev_H2",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
]

function DrumMachine (){

  const [currentSong,setCurrentSong] = useState('');

  const handleClick = song => {
    setCurrentSong(song);
  };

  return <div id='drum-machine' className='drum-machine-container'>
      <Display 
        currentSong={currentSong}
      />
      <div className='drum-pad-container'>
        {drumPads.map(item => (
          <DrumPad 
            song={item.song}
            key={item.key}
            drumKey={item.key}
            url={item.url}
            handleKeydown={() => handleClick(item.song)}
            onClick={() => handleClick(item.song)}
          />
        ))}
      </div>
  </div>
}

export default DrumMachine;