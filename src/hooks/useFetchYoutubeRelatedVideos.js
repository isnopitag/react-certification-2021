import { useState, useEffect } from 'react';
import { getYoutubeRealatedVideos } from '../helpers/youtubeService';

export const useFetchYoutbeRelatedVideos = (id) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getYoutubeRealatedVideos(id).then((res) => {
      setState({
        data: res.data.items,
        loading: false,
      });
    });
  }, [id]);

  return state;
};