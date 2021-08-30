import { useState, useEffect } from 'react';
import { getYoutubeRealatedVideos } from '../helpers/youtubeService';
import { debounce } from '../utils/debounce';

export const useFetchYoutbeRelatedVideos = (id) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    if (id !== 'true') {
      debounce(
        getYoutubeRealatedVideos(id).then((res) => {
          setState({
            data: res.data.items,
            loading: false,
          });
        }),
        400
      );
    }
  }, [id]);

  return state;
};
