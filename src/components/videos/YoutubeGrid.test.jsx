import React from 'react';
import { render } from '@testing-library/react';
import { AppContext } from '../../context/context';
import { AuthContext } from '../../auth/AuthContext';
import { YoutubeGrid } from './YoutubeGrid';

const fakeData = {
  search: 'Wizeline'
};
const distpatchMock = jest.fn();
const stateMock = { ...fakeData };
const stateMockAuth = { ...fakeData };

const build = () => {
  const { container } = render(
    <AuthContext.Provider value={{ ...stateMockAuth, distpatchMock }}>
      <AppContext.Provider value={{ ...stateMock, distpatchMock }}>
        <YoutubeGrid />
      </AppContext.Provider>
    </AuthContext.Provider>
  );
  return {
    container
  };
};


describe('Youtube Grid ', () =>{

  it('renders', () => {
    build()
  })
})