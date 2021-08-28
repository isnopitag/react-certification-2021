import React, { useReducer } from 'react';
import { render } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { theme } from '../../../context/theme';
import { initialState, reducer } from '../../../context/reducer';
import { AppContext } from '../../../context/context';

describe('SearchBar mounted', () => {
  it('shows correct color with colorcode', () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { getByTestId } = render(
      <AppContext.Provider value={{ ...state, dispatch }}>
        <SearchBar />
      </AppContext.Provider>
    );
    console.log(theme);
    expect(getByTestId('searchWrapper')).toHaveStyle('background: #20aee5');
  });

  test('SearchBar initially has a lenght of 0', () => {
    const fakeFunc = () => {};
    const { getByTestId } = render(<SearchBar setSearch={fakeFunc} setView={fakeFunc} />);
    const searchBarEl = getByTestId('searchInput');

    expect(searchBarEl.textContent.length).toBe(0);
  });

  test('SearchBar initially has a default placeholder', () => {
    const fakeFunc = () => {};
    const { getByPlaceholderText } = render(
      <SearchBar setSearch={fakeFunc} setView={fakeFunc} />
    );
    const searchBarPlaceHolder = getByPlaceholderText('Search...');

    expect(searchBarPlaceHolder.placeholder).toBe('Search...');
  });
});
