import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AccountCircle } from '../../../assets/account-circle.svg';
import { backgroundColorText } from '../Colors';

export const UserControl = () => {
  const Account = styled.div`
    cursor: pointer;
    display: flex;
    fill: ${backgroundColorText};
    left: 50%;
    padding: 1rem 2rem;
    top: 50%;
  `;
  return (
    <>
      <Account>
        <AccountCircle width="32px" height="32px" stroke="white" />
      </Account>
    </>
  );
};
