import React, { useState } from 'react';

import './Home.css'
// API
import { searchYoutubeVideos } from '../../api/getYoutubeVideos';

function Search({ setSearchVideos }) {
  const [search, setSearch] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    searchYoutubeVideos(search, setSearchVideos);
    setSearch('')
  };
  return (
    <div>
      <form className='search-input'onSubmit={onSubmit}>
        <input
          type='text'
          value={search}
          placeholder='Search Youtube Videos'
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <button type='submit'>search</button> */}
      </form>


    </div>
  );
}

export default Search;
