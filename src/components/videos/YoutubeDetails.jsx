import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { YoutubeCard } from './YoutubeCard';
import { YoutubeVideoPlayer } from './YoutubeVideoPlayer';
import { useFetchYoutbeRelatedVideos } from '../../hooks/useFetchYoutubeRelatedVideos';
import { AppContext } from '../../context/context';
import { useHistory } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

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

export const YoutubeDetails = () => {
  const { item, setItem } = useContext(AppContext);
  const { logged, authDispatch } = useContext(AuthContext);
  const { data: items, loading } = useFetchYoutbeRelatedVideos(item.id.videoId);
  const [message, setMessage] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (item.id.videoId === 'true') {
      history.replace('/');
    }
  }, [item,history]);

  const handleClick = () => {
    history.replace('/');
  };

  const handleAddToFavorites = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
    authDispatch({
      type: types.addFavorites,
      value: {
        id: item.id.videoId,
        item: item.item,
      },
    });
  };
  return (
    <>
      <Wrapper id="wrapper1">
        {loading && <h1 data-testid="loading-value">LOADING...</h1>}
        <Box1 id="box1">
          <ActionButton
            id="button-details"
            onClick={handleClick}
            type="button"
            data-testid="button-return"
            color="#1c5476"
          >
            <span>Return to main</span>
          </ActionButton>
          {logged && (
            <ActionButton
              id="button-details"
              onClick={handleAddToFavorites}
              type="button"
              data-testid="button-fav"
              color="#04aa6d"
            >
              <span>Add to your Favorites</span>
            </ActionButton>
          )}
          {message && <h4>Added to your favorites...</h4>}
        </Box1>
        <div>
          <YoutubeVideoPlayer id={item.id.videoId} item={item.item} />
        </div>
        <div>
          {items.map((itemVideo) => {
            // console.log(itemVideo);
            const { etag, snippet, id: idVideo } = itemVideo;
            if (snippet !== undefined) {
              return (
                <YoutubeCard
                  key={etag}
                  id={idVideo}
                  item={snippet}
                  loading={loading}
                  setItem={setItem}
                />
              );
            }
            return <div></div>
          })}
        </div>
      </Wrapper>
    </>
  );
};
