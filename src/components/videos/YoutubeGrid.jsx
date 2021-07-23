import React from 'react';
import styled from 'styled-components';
import { videos } from '../../data/youtubeVideos';
import { YoutubeCard } from './YoutubeCard';

export const YoutubeGrid = () => {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(20px, auto);
    grid-gap: 1rem;
  `;

  const { items } = videos;
  console.log(items);

  return (
    <Grid>
      {items.map((item) => {
        const { etag, snippet } = item;
        return <YoutubeCard key={etag} item={snippet} />;
      })}
    </Grid>
  );
};
