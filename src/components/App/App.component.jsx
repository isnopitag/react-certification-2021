// import React, { useLayoutEffect } from 'react';
import React, {useState} from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
// import LoginPage from '../../pages/Login';
// import NotFound from '../../pages/NotFound';
// import SecretPage from '../../pages/Secret';
// import Private from '../Private';
// import Fortune from '../Fortune';
// import Layout from '../Layout';
// import { random } from '../../utils/fns';
import { NavBarContainer } from '../MyLayout/NavContainer';

function App() {
  // useLayoutEffect(() => {
  //   const { body } = document;

  //   function rotateBackground() {
  //     const xPercent = random(100);
  //     const yPercent = random(100);
  //     body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
  //   }

  //   const intervalId = setInterval(rotateBackground, 3000);
  //   body.addEventListener('click', rotateBackground);

  //   return () => {
  //     clearInterval(intervalId);
  //     body.removeEventListener('click', rotateBackground);
  //   };
  // }, []);

  const [search, setSearch] = useState('Wizeline');
  const [view, setView] = useState(false)

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBarContainer setSearch={setSearch} setView={setView}/>
        <HomePage  search={search} view={view} setView={setView}/>
        {/* <Layout>
          <Switch>
            <Route exact path="/">
              
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Fortune />
        </Layout> */}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
