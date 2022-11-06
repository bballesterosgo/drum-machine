import React from "react";
import Display from "./Display";

import '../stylesheet/DrumMachine.css';



function DrumMachine (){

  return <div id='drum-machine' className='drum-machine-container'>
      <Display />
    <div className='drum-pad-container'>
      <div class="drum-pad" id="Chord-1">
        <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"></audio>Q
      </div>
      <div class="drum-pad" id="Chord-2">
        <audio class="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"></audio>W
      </div>
      <div class="drum-pad" id="Chord-3">
        <audio class="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"></audio>E
      </div>
      <div class="drum-pad" id="Shaker">
        <audio class="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"></audio>A
      </div>
      <div class="drum-pad" id="Open-HH">
        <audio class="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"></audio>S
      </div>
      <div class="drum-pad" id="Closed-HH">
        <audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"></audio>D
      </div>
      <div class="drum-pad" id="Punchy-Kick">
        <audio class="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"></audio>Z
      </div>
      <div class="drum-pad" id="Side-Stick">
        <audio class="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"></audio>X
      </div>
      <div class="drum-pad" id="Snare">
        <audio class="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"></audio>C
      </div>
    </div>
  </div>
}

export default DrumMachine;