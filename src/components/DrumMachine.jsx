import React from "react";
import Display from "./Display";

import '../stylesheet/DrumMachine.css';
import Button from "./Button";


function DrumMachine (){

  return <div id='drum-machine' className='drum-machine-container'>
      <Display />
    <div className='drum-pad-container'>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  </div>
}

export default DrumMachine;