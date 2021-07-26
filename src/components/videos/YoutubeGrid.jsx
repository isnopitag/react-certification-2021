import React from 'react';
import styled from 'styled-components';
import { videos } from '../../data/youtubeVideos';
import { YoutubeCard } from './YoutubeCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(20px, auto);
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const YoutubeGrid = () => {
  const { items } = videos;

  return (
    <Grid id="youtube-grid">
      {items.map((item) => {
        const { etag, snippet } = item;
        return <YoutubeCard key={etag} item={snippet} />;
      })}
    </Grid>
  );
};
