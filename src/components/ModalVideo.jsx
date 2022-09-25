import React from 'react';
import ReactPlayer from 'react-player';
import video from '../Assets/inicial-video.mp4'


const ModalVideo = () => {

  return (
    <div className='player-wrapper modal2'>
    
        <ReactPlayer
          className='react-player'
          url={video}
          width='100%'
          height='100%'
          playing
          loop
        />    
    </div>
  );
};

export default ModalVideo;

