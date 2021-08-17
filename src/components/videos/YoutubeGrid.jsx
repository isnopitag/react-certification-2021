import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useFetchYoutbeVideos } from '../../hooks/useFetchYoutubeVideos';
import { YoutubeCard } from './YoutubeCard';
import { YoutubeDetails } from './YoutubeDetails';
import { AppContext } from '../../context/context';

const Grid = styled.div`
  background: ${(props) => props.theme.backgroundColor};
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
  const { view, search } = useContext(AppContext);
  const [item, setItem] = useState({});

  const { data: items, loading } = useFetchYoutbeVideos(search);
  // const items = []
  // const loading = true

  if (!view) {
    return (
      <Grid id="youtube-grid" data-testid="YoutubeGrid">
        {loading && <h4>LOADING...</h4>}
        {items.map((itemVideo) => {
          const { etag, snippet, id } = itemVideo;
          return (
            <YoutubeCard
              data-testid="YoutubeCard"
              key={etag}
              id={id}
              item={snippet}
              setItem={setItem}
            />
          );
        })}
      </Grid>
    );
  }

  return (
    <YoutubeDetails
      data-testid="YoutubeDetails"
      id={item.id.videoId}
      item={item.item}
      // setView={setView}
      setItem={setItem}
    />
  );
};

// YoutubeGrid.propTypes = {
//   search: PropTypes.string.isRequired,
//   view: PropTypes.bool.isRequired,
//   setView: PropTypes.func.isRequired,
// };
