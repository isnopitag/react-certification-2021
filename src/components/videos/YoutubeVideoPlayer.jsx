import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: stretch;
  align-items: stretch;
`;
const Box2 = styled.div`
  align-self: center;
  grid-column: 2/3;
  grid-row: 2/3;
`;

const Box3 = styled.div`
  align-self: center;
  grid-column: 2/3;
  grid-row: 3/3;
`;

export const YoutubeVideoPlayer = ({ id, item }) => {
  const url = `https://www.youtube.com/embed/${id}?enablejsapi=1&origin=http://example.com`;

  const { title, description } = item;

  return (
    <Wrapper>
      <Box2>
        <iframe
          title={title}
          id="player"
          type="text/html"
          width="640"
          height="360"
          src={url}
          frameBorder="0"
        />
      </Box2>
      <Box3>
        <h3>{title}</h3>
        <p>{description}</p>
      </Box3>
    </Wrapper>
  );
};
YoutubeVideoPlayer.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};
