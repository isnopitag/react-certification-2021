import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import { AppContext } from '../../../context/context';
import { UserControl } from './UserControl';

const fakeData = {
  id: '123',
  name: 'Fake Name',
  avatarUrl: 'url',
  logged: true
};

const build = () => {
  const distpatchMock = jest.fn();
  const stateMock = {...fakeData};
  const { container } = render(
    <AuthContext.Provider value={{ ...stateMock, distpatchMock }}>
      <AppContext.Provider value={{ ...stateMock, distpatchMock }}>
        <UserControl />
      </AppContext.Provider>
    </AuthContext.Provider>
  );
  return {
    container,
    name: () => getByTestId(container, 'name-text'),
  };
};

describe('UserControl', () => {
  it('render', () => {
    build();
  });

    it('display the fake data', () => {
      const {name } = build();
      expect(name()).toBeDefined()
      expect(name()).toHaveTextContent('Fake Name')
    })
});
