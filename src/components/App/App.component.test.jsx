import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { App } from './App.component.jsx';
import "@testing-library/jest-dom/extend-expect"

test("Set something into the search input ", () => {
    
    const { getByTestId } = render (<App/>);
    const searchBarEl = getByTestId("searchInput");
    
    fireEvent.change(searchBarEl, {
        target: {
            value: 'Leyendas legendarias'
        }
    })
    
    expect(searchBarEl.value).toBe('Leyendas legendarias');

})

test("Make a search and render something ", async () => {
    
    const { getByTestId } = render (<App/>);
    const searchBarEl = getByTestId("searchInput");
    
    fireEvent.change(searchBarEl, {
        target: {
            value: 'Leyendas legendarias'
        }
    })

    fireEvent.submit(searchBarEl)

    const gridEl = await getByTestId("YoutubeGrid");

    console.log(gridEl);

    // const nameWrapper =  await findByTestId('YoutubeGrid');

    
    // expect(searchBarEl.value).toBe('Leyendas legendarias');

})