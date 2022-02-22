import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './Home.css';

// API
import { getYoutubeVideos } from '../../api/getYoutubeVideos';
import Search from './Search';

function Home() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [searchVideos, setSearchVideos] = useState([{
    "kind": "youtube#searchResult",
    "etag": "T0f5_uWJ68UOV8Qj309VXUZMvpI",
    "id": {
        "kind": "youtube#video",
        "videoId": "grEKMHGYyns"
    },
    "snippet": {
        "publishedAt": "2018-08-08T14:32:40Z",
        "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
        "title": "Learn Java 8 - Full Tutorial for Beginners",
        "description": "Learn Java 8 and object oriented programming with this complete Java course for beginners. ⭐️Contents ⭐️ ⌨️ (0:00:00) 1 ...",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/grEKMHGYyns/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/grEKMHGYyns/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/grEKMHGYyns/hqdefault.jpg",
                "width": 480,
                "height": 360
            }
        },
        "channelTitle": "freeCodeCamp.org",
        "liveBroadcastContent": "none",
        "publishTime": "2018-08-08T14:32:40Z"
    }
},{
  "kind": "youtube#searchResult",
  "etag": "T0f5_uWJ68UOV8Qj309VXUZMvpI",
  "id": {
      "kind": "youtube#video",
      "videoId": "grEKMHGYyns"
  },
  "snippet": {
      "publishedAt": "2018-08-08T14:32:40Z",
      "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
      "title": "Learn Java 8 - Full Tutorial for Beginners",
      "description": "Learn Java 8 and object oriented programming with this complete Java course for beginners. ⭐️Contents ⭐️ ⌨️ (0:00:00) 1 ...",
      "thumbnails": {
          "default": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/default.jpg",
              "width": 120,
              "height": 90
          },
          "medium": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/mqdefault.jpg",
              "width": 320,
              "height": 180
          },
          "high": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/hqdefault.jpg",
              "width": 480,
              "height": 360
          }
      },
      "channelTitle": "freeCodeCamp.org",
      "liveBroadcastContent": "none",
      "publishTime": "2018-08-08T14:32:40Z"
  }
},{
  "kind": "youtube#searchResult",
  "etag": "T0f5_uWJ68UOV8Qj309VXUZMvpI",
  "id": {
      "kind": "youtube#video",
      "videoId": "grEKMHGYyns"
  },
  "snippet": {
      "publishedAt": "2018-08-08T14:32:40Z",
      "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
      "title": "Learn Java 8 - Full Tutorial for Beginners",
      "description": "Learn Java 8 and object oriented programming with this complete Java course for beginners. ⭐️Contents ⭐️ ⌨️ (0:00:00) 1 ...",
      "thumbnails": {
          "default": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/default.jpg",
              "width": 120,
              "height": 90
          },
          "medium": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/mqdefault.jpg",
              "width": 320,
              "height": 180
          },
          "high": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/hqdefault.jpg",
              "width": 480,
              "height": 360
          }
      },
      "channelTitle": "freeCodeCamp.org",
      "liveBroadcastContent": "none",
      "publishTime": "2018-08-08T14:32:40Z"
  }
},{
  "kind": "youtube#searchResult",
  "etag": "T0f5_uWJ68UOV8Qj309VXUZMvpI",
  "id": {
      "kind": "youtube#video",
      "videoId": "grEKMHGYyns"
  },
  "snippet": {
      "publishedAt": "2018-08-08T14:32:40Z",
      "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
      "title": "Learn Java 8 - Full Tutorial for Beginners",
      "description": "Learn Java 8 and object oriented programming with this complete Java course for beginners. ⭐️Contents ⭐️ ⌨️ (0:00:00) 1 ...",
      "thumbnails": {
          "default": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/default.jpg",
              "width": 120,
              "height": 90
          },
          "medium": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/mqdefault.jpg",
              "width": 320,
              "height": 180
          },
          "high": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/hqdefault.jpg",
              "width": 480,
              "height": 360
          }
      },
      "channelTitle": "freeCodeCamp.org",
      "liveBroadcastContent": "none",
      "publishTime": "2018-08-08T14:32:40Z"
  }
},{
  "kind": "youtube#searchResult",
  "etag": "T0f5_uWJ68UOV8Qj309VXUZMvpI",
  "id": {
      "kind": "youtube#video",
      "videoId": "grEKMHGYyns"
  },
  "snippet": {
      "publishedAt": "2018-08-08T14:32:40Z",
      "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
      "title": "Learn Java 8 - Full Tutorial for Beginners",
      "description": "Learn Java 8 and object oriented programming with this complete Java course for beginners. ⭐️Contents ⭐️ ⌨️ (0:00:00) 1 ...",
      "thumbnails": {
          "default": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/default.jpg",
              "width": 120,
              "height": 90
          },
          "medium": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/mqdefault.jpg",
              "width": 320,
              "height": 180
          },
          "high": {
              "url": "https://i.ytimg.com/vi/grEKMHGYyns/hqdefault.jpg",
              "width": 480,
              "height": 360
          }
      },
      "channelTitle": "freeCodeCamp.org",
      "liveBroadcastContent": "none",
      "publishTime": "2018-08-08T14:32:40Z"
  }
}]);

  useEffect(() => {
    getYoutubeVideos(setYoutubeVideos);
  }, []);

  console.log(youtubeVideos);
  console.log(searchVideos);

  return (
    <div className='home'>
      <div className='flex-item quiz'>
        <div className='item1'>
          <h1>Resources</h1>
        </div>
        <div className='item2'>
          <h5>Improve your ability to answer interview questions</h5>
        </div>
        <Search setSearchVideos={setSearchVideos} />
        
       
      <div className='search-grid'>
          {searchVideos.length !== 0 &&
    
            searchVideos.map((video) => (
              <Link key={video.id.videoId} to={'player'} state={{ url: `https://www.youtube.com/watch?v=${video.id.videoId}` }}>
                <div className='search-video'>
                  <img src={video.snippet.thumbnails.high.url} alt={video.snippet.description} /> 
                   <h3>{video.snippet.title}</h3> 
                 <p>{video.snippet.description}</p>
                 
                </div>
              </Link>
            ))}
        </div>
        <div className='grid'>
          {youtubeVideos.length !== 0 &&
            youtubeVideos.map((video) => (
              <Link key={video.id} to={'player'} state={{ url: video.url }}>
                <div className='video'>
                  <img src={video.image} alt={video.name} />
                  <span>watch</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
