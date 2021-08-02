import { useState, useEffect } from 'react';
import { getYoutubeVideos } from '../helpers/youtubeService';

export const useFetchYoutbeVideos = (query) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getYoutubeVideos(query).then((res) => {
      setState({
        data: res.data.items,
        loading: false,
      });
    });
  }, [query]);

  return state;
};
