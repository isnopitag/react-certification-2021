import { useState, useEffect } from 'react';
import { getYoutubeVideos } from '../helpers/youtubeService';
import { debounce } from '../utils/debounce';

export const useFetchYoutbeVideos = (query) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    debounce(
      getYoutubeVideos(query).then((res) => {
        setState({
          data: res.data.items,
          loading: false,
        });
      }),
      400
    );
  }, [query]);

  return state;
};
