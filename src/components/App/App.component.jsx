import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import { NavBarContainer } from '../MyLayout/NavContainer';
import { initialState, reducer } from '../../context/reducer';
import { AppContext } from '../../context/context';

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;

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
      <AuthProvider>
        <ThemeProvider id="themeProvier" theme={currentTheme}>
          <AppContext.Provider value={{ ...state, dispatch }}>
            <GlobalStyles id="globalStyles" />
            <NavBarContainer data-testid="navbar" />
            <HomePage data-testid="homePage" />
          </AppContext.Provider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
