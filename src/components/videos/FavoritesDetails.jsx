import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { YoutubeCard } from './YoutubeCard';
import { YoutubeVideoPlayer } from './YoutubeVideoPlayer';
import { AppContext } from '../../context/context';
import { useHistory } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const Box1 = styled.div`
  color: ${(props) => props.theme.textColor};
  align-self: start;
  grid-column: 1/3;
  grid-row: 1/3;
`;
const ActionButton = styled.button`
  margin: 4px 2px;
  position: relative;
  overflow: hidden;
  -webkit-transition: background 400ms;
  transition: background 400ms;
  color: #fff;
  background-color: ${(props) => props.color || '#fff'};
  padding: 0.5em 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const FavoritesDetails = () => {
  const { item } = useContext(AppContext);
  const { favorites } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (item.id.videoId === 'true') {
      history.replace('/');

    }
  }, [item,history]);

  const handleClick = () => {
    history.replace('/favorites');
  };
  return (
    <>
      <Wrapper id="wrapper-fav">
        <Box1 id="box-fav">
          <ActionButton
            id="button-favorites-details"
            onClick={handleClick}
            type="button"
            data-testid="button"
            color="#1c5476"
          >
            <span>Return to favorites</span>
          </ActionButton>
        </Box1>
        <div>
          <YoutubeVideoPlayer id={item.id} item={item.item} />
        </div>
        <div>
          {favorites.map((itemVideo) => {
            const { id, item: video } = itemVideo;
            if (id !== item.id) {
              return (
                <YoutubeCard key={id} id={id} item={video} loading={false} type={true} />
              );
            }
            return <div key={id}></div>
          })}
        </div>
      </Wrapper>
    </>
  );
};
