import React from 'react';
import styled from 'styled-components';
import { NavBar } from './NavBar';
import PropTypes from "prop-types";

const Container = styled.div`
    height: 20vh;
  `;

export const NavBarContainer = ({setSearch, setView}) => {
  
  return (
    <Container id="navbarContainer">
      <NavBar setSearch={setSearch} setView={setView} />
    </Container>
  );
};

NavBarContainer.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
};
