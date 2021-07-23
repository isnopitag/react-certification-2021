import React from 'react';
import styled from 'styled-components';
import { backgroundColorText } from '../Colors';
import { ReactComponent as Magnify } from '../../../assets/magnify.svg';

export const SearchBar = () => {
  const SearchWrapper = styled.div`
    background: rgba(1, 1, 1, 0.3);
    border: none;
    border-radius: 5px;
    display: grid;
    height: 50px;
    grid-template-columns: 32px 225px;
    margin: 5px;
  `;
  const Icon = styled.div`
    fill: ${backgroundColorText};
    flex: 0 0;
    height: 24px;
    left: 50%;
    margin: 10px;
    padding: 5px;
    top: 50%;
    width: 24px;
  `;
  const SearchInput = styled.input`
    background: none;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    margin: 10px;

    padding: 5px;
    padding-left: 5 px;
    &:focus {
      outline: none;
    }
    &:hover {
      color: ${backgroundColorText};
    }
    ::placeholder {
      color: grey;
    }
  `;
  return (
    <>
      <SearchWrapper>
        <Icon>
          <Magnify width="24px" height="24px" stroke="white" />
        </Icon>
        <SearchInput type="text" placeholder="Search..." />
      </SearchWrapper>
    </>
  );
};
