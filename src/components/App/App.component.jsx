import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import { NavBarContainer } from '../MyLayout/NavContainer';
import { AppRouter } from '../../routes/AppRouter';

export function App() {


  const [search, setSearch] = useState('Wizeline');
  const [view, setView] = useState(false);

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter/>
        <NavBarContainer data-testid="navbar" setSearch={setSearch} setView={setView} />
        <HomePage data-testid="homePage" search={search} view={view} setView={setView} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
