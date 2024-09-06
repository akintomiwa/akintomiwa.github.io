import React from 'react';
// import 
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className="video-player">
      <ReactPlayer url={url} playing={true} volume={0.5} width="100%"
      />
    </div>
  );
};

export default VideoPlayer;