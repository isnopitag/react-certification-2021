import api, { baseParams } from './apiYoutube';

export const getYoutubeVideos = (query) => {
  return api.get(`search`, {
    params: {
      ...baseParams,
      q: query,
    },
  });
};

export const getYoutubeRealatedVideos = (id) => {
  return api.get(`search`, {
    params: {
      ...baseParams,
      relatedToVideoId: id,
      type: 'video',
    },
  });
};
