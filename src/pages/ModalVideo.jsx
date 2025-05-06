import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import video from '../Assets/inicial-video.mp4';

const ModalVideo = ({ onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onClose, 1000); 
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`player-wrapper modal2 ${fadeOut ? "fade-out" : ""}`}>
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
