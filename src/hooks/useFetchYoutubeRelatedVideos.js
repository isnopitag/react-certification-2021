import { useState, useEffect } from 'react';
import { getYoutubeRealatedVideos } from '../helpers/youtubeService';

export const useFetchYoutbeRelatedVideos = (id) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    if (id !== 'true') {
      getYoutubeRealatedVideos(id).then((res) => {
        console.log('RES', res.data);
        setState({
          data: res.data.items,
          loading: false,
        });
      });
    }
  }, [id]);

  return state;
};
