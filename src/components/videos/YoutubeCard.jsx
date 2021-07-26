import React from 'react';
import styled from 'styled-components';

export const YoutubeCard = ({ item }) => {
  const { title, description, thumbnails } = item;

  const Card = styled.div`
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    min-height: 120px;
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
  CardImage.displayName='img';

  const CardBody = styled.div`
    flex: 1;
  `;
  const CardTitle = styled.p`
    fontweight: '700';
    fontsize: 16;
  `;
  CardTitle.displayName='cardTitle';

  const CardText = styled.p`
    fontweight: '800';
  `;

  return (
    <Card>
      <CardImage src={thumbnails.medium.url} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};
