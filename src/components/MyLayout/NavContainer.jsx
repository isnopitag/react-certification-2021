import React from 'react';
import styled from 'styled-components';
import { NavBar } from './NavBar';

export const NavBarContainer = () => {
  const Container = styled.div`
    // background: #ffffff;
    height: 20vh;
    // z-index: 1000;
  `;
  return (
    <Container>
      <NavBar />
    </Container>
  );
};
