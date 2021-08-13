import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import "@testing-library/jest-dom/extend-expect"


test("SearchBar initially has a lenght of 0", () => {
    const fakeFunc = () => {};
    const { getByTestId } = render (<SearchBar setSearch={fakeFunc} setView={fakeFunc}/>);
    const searchBarEl = getByTestId("searchInput");
    
    expect(searchBarEl.textContent.length).toBe(0);

})

test("SearchBar initially has a default placeholder", () => {
    const fakeFunc = () => {};
    const { getByPlaceholderText } = render (<SearchBar setSearch={fakeFunc} setView={fakeFunc}/>);
    const searchBarPlaceHolder = getByPlaceholderText('Search...');
    
    expect(searchBarPlaceHolder.placeholder).toBe('Search...');

})