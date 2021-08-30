import React from 'react';
import styled from 'styled-components';

const HamburgerBtn = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  span {
    background: ${(props) => props.theme.invertedBackgroundColor};
    border-radius: 5px;
    height: 2px;
    margin-bottom: 4px;
    width: 25px;
  }
  @media (max-width: 410px) {
    display: none;
  }
`;

export const Hamburger = () => {
  return (
    <>
      <HamburgerBtn id="hamburger-btn">
        <span />
        <span />
        <span />
      </HamburgerBtn>
    </>
  );
};
