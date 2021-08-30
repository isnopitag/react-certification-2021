import { act, fireEvent, getByRole, getByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { LoginScreen } from './LoginScreen';
import { AuthContext } from '../../auth/AuthContext';
import userEvent from '@testing-library/user-event';

const fakeData = {
    search: 'Wizeline'
  };
  const distpatchMock = jest.fn();
const stateMockAuth = { ...fakeData };

const build = () => {
  const { container } = render(
    <AuthContext.Provider value={{ ...stateMockAuth, distpatchMock }}>
      <LoginScreen />
    </AuthContext.Provider>
  );
  return {
    container,
    loginBtn: () => getByTestId(container, 'login-button'),
    username: () => getByTestId(container, 'login-username'),
    password: () => getByTestId(container, 'login-password'),
  };
};

const for600Miliseconds = () =>
  new Promise((res) => {
    setTimeout(() => {
      res()
    }, 600)
  })

describe('Loginscreen', () => {

    it('reders', () =>{
        build()
    })

    it('send data from the inputs to make the login', async () => {
        const { loginBtn,username, password } = build()
        const inputUserName = screen.getByTestId("login-username");
        const inputPassword = screen.getByTestId("login-password");
        expect(loginBtn()).toBeDefined()
        expect(username()).toBeDefined()
        expect(password()).toBeDefined()

        expect(username()).toHaveValue('')
        expect(password()).toHaveValue('')

        userEvent.type(inputUserName, "wizeline");
        userEvent.type(inputPassword, "123");
    
        await act(async () => {
          fireEvent.click(loginBtn())
          await for600Miliseconds()
        })

        expect(username()).toHaveValue('')
        expect(password()).toHaveValue('')
      })

      it('send wrong data and display the message error', async () => {
        const { loginBtn,username, password } = build()
        const inputUserName = screen.getByTestId("login-username");
        const inputPassword = screen.getByTestId("login-password");
        expect(loginBtn()).toBeDefined()
        expect(username()).toBeDefined()
        expect(password()).toBeDefined()
        
        expect(username()).toHaveValue('')
        expect(password()).toHaveValue('')
        
        userEvent.type(inputUserName, "user");
        userEvent.type(inputPassword, "admin");
        
        await act(async () => {
            fireEvent.click(loginBtn())
            await for600Miliseconds()
        })
        const errorMessage = screen.getByTestId("error-message");
     
        expect(username()).toHaveValue('')
        expect(password()).toHaveValue('')
        expect(errorMessage).toBeInTheDocument();
        expect(screen.queryByTestId("error-message").textContent).toEqual("Error: Please enter correct Username & password.");
      })
});
