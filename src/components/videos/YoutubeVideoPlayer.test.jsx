import React from 'react';
import { render } from '@testing-library/react';
import { YoutubeVideoPlayer } from './YoutubeVideoPlayer';

const fakeData = {
    item: {
        item: {
          title: 'TEST',
          description: 'Description Test',
        },
        id: { videoId: 'nmXMgqjQzls' },
    }
  };
  
  const build = () => {
    const { container } = render(
        <YoutubeVideoPlayer id={fakeData.item.id.videoId} item={fakeData.item.item}/>
    );
    return {
      container
    };
  };
  
  
  describe('YoutubeVideoPlayer ', () =>{
  
    it('renders', () => {
      build()
    })
  })