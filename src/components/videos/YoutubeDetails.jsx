import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { YoutubeCard } from './YoutubeCard';
import { YoutubeVideoPlayer } from './YoutubeVideoPlayer';
import { useFetchYoutbeRelatedVideos } from '../../hooks/useFetchYoutubeRelatedVideos';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const Box1 = styled.div`
  align-self: start;
  grid-column: 1/3;
  grid-row: 1/3;
`;
const ReturnBtn = styled.button`
  margin-top: -3px;
  position: relative;
  overflow: hidden;
  -webkit-transition: background 400ms;
  transition: background 400ms;
  color: #fff;
  background-color: #1c5476;
  padding: 0.5em 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const YoutubeDetails = ({ id, item, setView, setItem }) => {
  const { data: items, loading } = useFetchYoutbeRelatedVideos(id);

  const handleClick = () => {
    setView(false);
  };
  return (
    <>
      <Wrapper>
        {loading && 'LOADING...'}
        <Box1>
          <ReturnBtn onClick={handleClick} type="button">
            <span>Return to main</span>
          </ReturnBtn>
        </Box1>
        <div>
          <YoutubeVideoPlayer id={id} item={item} />
        </div>
        <div>
          {items.map((itemVideo) => {
            const { etag, snippet, idVideo } = itemVideo;
            return (
              <YoutubeCard
                key={etag}
                id={idVideo}
                item={snippet}
                setView={setView}
                setItem={setItem}
              />
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

YoutubeDetails.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.object()).isRequired,
  setView: PropTypes.func.isRequired,
  setItem: PropTypes.func.isRequired,
};
