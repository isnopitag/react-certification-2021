import React, { useState } from 'react';
import styled from 'styled-components';
import { backgroundColorText } from '../Colors';
import { ReactComponent as Magnify } from '../../../assets/magnify.svg';
import PropTypes from 'prop-types';

const SearchWrapper = styled.form`
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

export const SearchBar = ({ setSearch, setView }) => {
  const [inputValue, setInputValue] = useState('');

  const handeInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Handle Submit', inputValue);
    if (inputValue.trim().length > 2) {
      setSearch(inputValue);
      setInputValue('');
      setView(false);
    }
  };

  return (
    <>
      <SearchWrapper id="searchWrapper" onSubmit={handleSubmit}>
        <Icon id="searchIcon">
          <Magnify width="24px" height="24px" stroke="white" />
        </Icon>
        <SearchInput id="searchInput" type="text" placeholder="Search..."  value={inputValue} onChange={handeInputChange} />
      </SearchWrapper>
    </>
  );
};

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
};
