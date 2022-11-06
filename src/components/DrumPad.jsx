import React,{ useRef,useEffect } from "react";

import '../stylesheet/DrumPad.css'

function DrumPad (props){

  const audio = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    window.focus();

    return () => document.removeEventListener("keydown", handleKeydown);
  });

  const handleKeydown = event => {
    if (event.keyCode === props.drumKey.charCodeAt()) {
      audio.current.play();
      audio.current.time = 0;
      return props.handleKeydown();
    } else {
      return true;
    }
  };

  const handleClick = event => {
    audio.current.play();
    audio.current.time = 0;
    return props.onClick();
  };

  return <div className="drum-pad" id={props.drumKey} onClick={handleClick} wwwww>
              {props.drumKey}
            <audio ref={audio} className="clip" src={props.url} id={props.drumKey}></audio>
          </div>

}

export default DrumPad; 