import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const list = videos.map((video, id) => 
    <VideoItem 
        key={id} 
        video={video} 
        onVideoSelect={onVideoSelect}
    />);

    return <div>{list}</div>; 
}

export default VideoList;