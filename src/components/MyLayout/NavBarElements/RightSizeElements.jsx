import React from 'react';
import styled from 'styled-components';
import { ThemeSwitcher } from './ThemeSwitcher';
import { UserControl } from './UserControl';

const Menu = styled.div`
  align-items: center;
  justify-content: space-between;
  position: absolute;
  display: flex;
  right: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightSizeElements = () => {
  return (
    <>
      <Menu id="rigthSize-elements">
        <ThemeSwitcher id="themeSwitcher" />
        <UserControl id="userControl" />
      </Menu>
    </>
  );
};
