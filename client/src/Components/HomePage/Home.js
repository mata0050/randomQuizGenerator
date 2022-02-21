import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

// CSS
import './Home.css';

// API
import {
  getYoutubeVideos,
  searchYoutubeVideos,
} from '../../api/getYoutubeVideos';

function Home() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    getYoutubeVideos(setYoutubeVideos);
  }, []);

  console.log(youtubeVideos);

  return (
    <div className='home'>
      <div className='flex-item quiz'>
        <div className='item1'>
          <h1>Resources</h1>
        </div>
        <div className='item2'>
          <h5>Improve your ability to answer interview questions</h5>
        </div>

        <div className='grid'>
          {youtubeVideos.length !== 0 &&
            youtubeVideos.map((video) => (
              <div className='video'>
                <img src={video.image} alt={video.name} />
                <span>watch</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
