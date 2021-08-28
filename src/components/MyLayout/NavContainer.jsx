import React from 'react';
import styled from 'styled-components';
import { NavBar } from './NavBar';

const Container = styled.div`
  height: 20vh;
`;

export const NavBarContainer = () => {
  return (
    <Container id="navbarContainer">
      <NavBar />
    </Container>
  );
};
