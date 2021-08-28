import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { YoutubeDetails } from './YoutubeDetails';
import { AppContext } from '../../context/context';
import { AuthContext } from '../../auth/AuthContext';

const fakeData = {
  id: '123',
  name: 'Fake Name',
  avatarUrl: 'url',
  logged: true,
  item: {
    item: {
      title: 'TEST',
      description: 'Description Test',
    },
    id: { videoId: 'nmXMgqjQzls' },
  },
};
const distpatchMock = jest.fn();
const stateMock = { ...fakeData };
const stateMockAuth = { ...fakeData };

const build = () => {
  const { container } = render(
    <AuthContext.Provider value={{ ...stateMockAuth, distpatchMock }}>
      <AppContext.Provider value={{ ...stateMock, distpatchMock }}>
        <YoutubeDetails />
      </AppContext.Provider>
    </AuthContext.Provider>
  );
  return {
    container,
    loadingValue: () => getByTestId(container, 'loading-value'),
    returnBtn: () => getByTestId(container, 'button-return'),
    returnFav: () => getByTestId(container, 'button-fav'),
  };
};

describe('YoutubeDetails', () => {

  it('renders',() => {
    build();
  })

  it('Renders Loading text before fetching data', () => {
    const { loadingValue } = build();
      expect(loadingValue()).toBeDefined()
      expect(loadingValue()).toHaveTextContent('LOADING...')
  });

  it('Renders return to main button', () =>{
    const { returnBtn } = build();
      expect(returnBtn()).toBeDefined()
  })

  it('Renders favorites button', () =>{
    const { returnFav } = build();
      expect(returnFav()).toBeDefined()
  })
})

