import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/context';

const Card = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-height: 80px;
  max-width: 500px;
  margin: 0.25em 0.5em;
  overflow: hidden;
  padding: 2px 16px;
  text-align: center;
  transition: 0.3s;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const CardImage = styled.img`
  border-radius: 5px 5px 0 0;
  width: 50%;
`;
CardImage.displayName = 'img';

const CardBody = styled.div`
  flex: 1;
`;
const CardTitle = styled.p`
  color: ${(props) => props.theme.textColor};
  fontweight: '700';
  fontsize: 16;
`;
CardTitle.displayName = 'cardTitle';

const CardText = styled.p`
color: ${(props) => props.theme.textColor};
  fontweight: '800';
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 4;
   -webkit-box-orient: vertical;
}
`;

export const YoutubeCard = ({
  item,
  id,
  loading,
  setItem,
}) => {
  const { title, description, thumbnails } = item;
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    if (!loading) {
      dispatch({
        type: 'setView',
        value: true,
      });
      setItem({
        id,
        item,
      });
    }
  };
  return (
    <Card id="card" onClick={handleClick}>
      <CardImage id="cardImage" src={thumbnails.medium.url} />
      <CardBody id="CardBody">
        <CardTitle id="cardTitle">{title}</CardTitle>
        <CardText id="cadText">{description}</CardText>
      </CardBody>
    </Card>
  );
};

// YoutubeCard.propTypes = {
//   id: PropTypes.object.isRequired,
//   item: PropTypes.object.isRequired,
//   setView: PropTypes.func.isRequired,
//   setItem: PropTypes.func.isRequired,
// };
