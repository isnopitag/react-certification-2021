import React from 'react';
import { getByTestId,render } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { AppContext } from '../../../context/context';

const fakeData = {
  search: 'Wizeline',
  currentTheme: {theme:'dark'}
};
const distpatchMock = jest.fn();
const stateMockAuth = { ...fakeData };

const build = () => {
  const { container } = render(
    <ThemeProvider id="themeProvier" theme={fakeData.currentTheme}>
        <AppContext.Provider value={{ ...stateMockAuth, distpatchMock }}>
          <SearchBar />
        </AppContext.Provider>
      </ThemeProvider>
  );
  return {
    container,
    searchWrapper: () => getByTestId(container, 'searchWrapper'),
    searchInput: () => getByTestId(container, 'searchInput'),
  };
};

describe('SearchBar mounted', () => {
  it('renders', () => {
      build()
  });

  test('SearchBar initially has a lenght of 0', () => {
    const { getByTestId } = render(
      <AppContext.Provider value={{ ...stateMockAuth, distpatchMock }}>
        <SearchBar />
      </AppContext.Provider>
    );
    const searchBarEl = getByTestId('searchInput');

    expect(searchBarEl.textContent.length).toBe(0);
  });

  test('SearchBar initially has a default placeholder', () => {
    const { getByPlaceholderText } = render(
      <AppContext.Provider value={{ ...stateMockAuth, distpatchMock }}>
        <SearchBar />
      </AppContext.Provider>
    );
    const searchBarPlaceHolder = getByPlaceholderText('Search...');

    expect(searchBarPlaceHolder.placeholder).toBe('Search...');
  });
});
