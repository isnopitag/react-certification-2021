import {  getByTestId, render } from '@testing-library/react';
import React from 'react';
import { YoutubeCard } from './YoutubeCard';
import { AppContext } from '../../context/context';

const fakeData = {
  id: '123',
  item: {
    title: 'Fake Title',
    description: 'Fake Description',
    thumbnails: 'null',
  },
  type: false,
  loading: false,
};

const build = () => {
  const distpatchMock = jest.fn();
  const stateMock = []
  const { container } = render(
    <AppContext.Provider value={{ ...stateMock, distpatchMock }}>
      <YoutubeCard
        item={fakeData.item}
        id={fakeData.id}
        type={false}
        loading={fakeData.loading}
      />
    </AppContext.Provider>
  );
  return {
    container,
    title: () => getByTestId(container, 'title'),
    description: () => getByTestId(container, 'description'),
  };
};

describe('YoutubeCard', () => {
  it('render', () => {
    build();
  });

  it('display the fake data', () => {
    const {title, description } = build();
    expect(title()).toBeDefined()
    expect(title()).toHaveTextContent('Fake Title')

    expect(description()).toBeDefined();
    expect(description()).toHaveTextContent('Fake Description')
  })
});


