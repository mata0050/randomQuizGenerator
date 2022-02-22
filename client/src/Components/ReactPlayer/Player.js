import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
// CSS
import './ReactPlayer.css';

function Player() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className='player'>
      <div className='player-container'>
        <ReactPlayer
          className='react-player'
          url={state.url}
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
}

export default Player;
