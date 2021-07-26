import React from 'react';
import styled from 'styled-components';
import { backgroundColor } from './Colors';
import { Hamburger } from './NavBarElements/Hamburger';
import { RightSizeElements } from './NavBarElements/RightSizeElements';
import { SearchBar } from './NavBarElements/SearchBar';

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background: ${backgroundColor};
  `;

export const NavBar = () => {
  

  return (
    <Nav id="navbar">
      <Hamburger />
      <SearchBar />
      <RightSizeElements />
    </Nav>
  );
};
