import { useState, useEffect } from 'react';
import React from 'react';

const YouTubeFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCrF5_tMMdjQ8Ch2Hwbf-DiA&maxResults=10&key=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => {
        setVideos(data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {videos.map(video => (
        <div key={video.id.videoId}>
          <h2>{video.snippet.title}</h2>
          <p>{video.snippet.description}</p>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        </div>
      ))}
    </div>
  );
};

export default YouTubeFeed;
