import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as Magnify } from '../../../assets/magnify.svg';
import { AppContext } from '../../../context/context';

const SearchWrapper = styled.form`
  background: ${(props) => props.theme.backgroundColorAlfa};
  border: none;
  border-radius: 5px;
  display: grid;
  height: 50px;
  grid-template-columns: 32px 225px;
  margin: 5px;
`;
const Icon = styled.div`
  fill: white;
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
    color: ${(props) => props.theme.text};
  }
  ::placeholder {
    color: ${(props) => props.theme.invertedTextColor};
  }
`;

export const SearchBar = () => {
  const { dispatch } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');

  const handeInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      dispatch({
        type: 'setSearch',
        value: inputValue,
      });
      setInputValue('');
    }
  };

  return (
    <>
      <SearchWrapper id="searchWrapper" onSubmit={handleSubmit}>
        <Icon id="searchIcon">
          <Magnify width="24px" height="24px" stroke="white" />
        </Icon>
        <SearchInput
          data-testid="searchInput"
          id="searchInput"
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handeInputChange}
        />
      </SearchWrapper>
    </>
  );
};
