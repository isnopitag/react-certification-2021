import React from 'react';
import styled from 'styled-components';
import { YoutubeCard } from './YoutubeCard';
import { useHistory } from 'react-router';

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
export const FavoritesGrid = () => {
//   const { view, search } = useContext(AppContext);
//   const [item, setItem] = useState({});

  // const { data: items, loading } = useFetchYoutbeVideos(search);
  //   const items = []
  //   const loading = true
  const { favorites } = JSON.parse(localStorage.getItem('user')) || [];
  const history = useHistory();
  const handleClick = () => {
    history.replace('/');
  };

  return (
    <div>
      <h3>Favorites ❤</h3>
      {favorites !== undefined && favorites.length === 0 && <h4>No Favorite videos</h4>}
      <ActionButton
        id="return-favs"
        onClick={handleClick}
        type="button"
        data-testid="button"
        color="#1c5476"
      >
        <span>Return to main</span>
      </ActionButton>
      <Grid id="favorites-grid" data-testid="FavortiesGrid">
        {favorites !== undefined &&
          favorites.length > 0 &&
          favorites.map((itemVideo) => {
            const { item, id } = itemVideo;
            return (
              <YoutubeCard
                data-testid="YoutubeCard"
                key={id}
                id={id}
                item={item}
                type={true}
              />
            );
          })}
      </Grid>
    </div>
  );
};

// return (
//   <YoutubeDetails
//     data-testid="YoutubeDetails"
//     id={item.id.videoId}
//     item={item.item}
//     // setView={setView}
//     setItem={setItem}
//   />
// );

// YoutubeGrid.propTypes = {
//   search: PropTypes.string.isRequired,
//   view: PropTypes.bool.isRequired,
//   setView: PropTypes.func.isRequired,
// };
