import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeVideo = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const videoUrl = 'https://www.youtube.com/watch?v=RHijwy_4FrQ';
  const videoId = extractVideoId(videoUrl);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            id: videoId,
            key: 'AIzaSyCHTlvuDTn2Oyr6b5CWbCPR2_OqwyHZ2o0', // Replace with your API key
          },
        });
        const snippet = response.data.items[0].snippet;
        setVideoInfo({ videoId, snippet });
      } catch (error) {
        console.error('Error fetching video data: ', error);
      }
    };

    fetchVideoInfo();
  }, [videoId]);

  function extractVideoId(url) {
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    let match;
    while ((match = regex.exec(url))) {
      if (match[1] === 'v') {
        return match[2];
      }
    }
    return null;
  }

  return (
    <div style={{ maxWidth: 'auto', margin: 'auto', textAlign: 'center' }}>
      {videoInfo && (
        <div>
          <h2 style={{ marginTop: '20px' }}>{videoInfo.snippet.title}</h2>
          <p>{videoInfo.snippet.description}</p>
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoInfo.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ margin: '20px 0' }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default YouTubeVideo;
