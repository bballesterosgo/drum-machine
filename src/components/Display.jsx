import React from "react";

import '../stylesheet/Display.css'

function Display ({ currentSong }){
  return <div id='display' className='controls-container'>
    <p className='display' id='display'>{currentSong}</p>
  </div>
}


export default Display;