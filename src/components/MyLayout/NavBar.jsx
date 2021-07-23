import React from 'react';
import styled from 'styled-components';
import { backgroundColor } from './Colors';
import { Hamburger } from './NavBarElements/Hamburger';
import { RightSizeElements } from './NavBarElements/RightSizeElements';
import { SearchBar } from './NavBarElements/SearchBar';

export const NavBar = () => {
  const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background: ${backgroundColor};
  `;

  return (
    <Nav>
      <Hamburger />
      <SearchBar />
      <RightSizeElements />
    </Nav>
  );
};
