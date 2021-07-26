import React from 'react';
import styled from 'styled-components';
import { backgroundColorText } from '../Colors';

const HamburgerBtn = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding-right: 50px;
    span {
      background: ${backgroundColorText};
      border-radius: 5px;
      height: 2px;
      margin-bottom: 4px;
      width: 25px;
    }
    @media (max-width: 100px) {
      display: flex;
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
