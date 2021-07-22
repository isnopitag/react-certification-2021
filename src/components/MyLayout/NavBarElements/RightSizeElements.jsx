import React from 'react';
import styled from 'styled-components';
import { ThemeSwitcher } from './ThemeSwitcher';
import { UserControl } from './UserControl';

export const RightSizeElements = () => {
  const Menu = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 0px;

    @media (max-width: 768px) {
        flex-direction: column;
        max-height: 300px;
        overflow: hidden;
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
  `;
  return (
    <>
      <Menu>
        <ThemeSwitcher />
        <UserControl />
      </Menu>
    </>
  );
};
