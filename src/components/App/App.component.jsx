import React, { useEffect, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { initialState, reducer } from '../../context/reducer';
import { AppContext } from '../../context/context';
import { AppRouter } from '../../routes/AppRouter';
import { AuthContext } from '../../auth/AuthContext';
import { authReducer, AuthState } from '../../auth/authReducer';

const init = () => {
  return (
    JSON.parse(localStorage.getItem('user')) || AuthState
  );
};

export function App() {
  const [user, authDispatch] = useReducer(authReducer, {}, init);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const GlobalStyles = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    background: ${(props) => props.theme.backgroundColor};
    font-family: helvetica;
  }
  h4{
    color: ${(props) => props.theme.textColor};
  }
  h3{
    color: ${(props) => props.theme.textColor};
  }
  p{
    color: ${(props) => props.theme.textColor};
  }
`;

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ ...user, authDispatch }}>
        <ThemeProvider id="themeProvier" theme={currentTheme}>
          <AppContext.Provider value={{ ...state, dispatch }}>
            <GlobalStyles id="globalStyles" />
            <AppRouter />
            {/* <NavBarContainer data-testid="navbar" /> */}
            {/* <HomePage data-testid="homePage" /> */}
          </AppContext.Provider>
        </ThemeProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
