import React from 'react';
import styled from 'styled-components';
import { backgroundColorText } from '../Colors';

export const Hamburger = () => {
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
  return (
    <>
      <HamburgerBtn>
        <span />
        <span />
        <span />
      </HamburgerBtn>
    </>
  );
};
