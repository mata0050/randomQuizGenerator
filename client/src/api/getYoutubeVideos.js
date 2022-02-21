import api from '../utils/api';

// add youtube videos in db
export const getYoutubeVideos = async (setYoutubeVideos) => {
  try {
    const { data } = await api.get('/api/youtube');
    setYoutubeVideos(data);
  } catch (error) {
    console.log(error);
  }
};

// add youtube videos in db
export const searchYoutubeVideos = async (query, setSearchVideos) => {
  try {
    const { data } = await api.get(`/api/youtube/${query}`);
    setSearchVideos(data);
  } catch (error) {
    console.log(error);
  }
};


