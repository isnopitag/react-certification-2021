// import React, { useRef } from 'react';
import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { YoutubeGrid } from '../../components/videos/YoutubeGrid';
// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage({ search, view, setView }) {
  // const history = useHistory();
  // const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <YoutubeGrid search={search} view={view} setView={setView} />
    // <section className="homepage" ref={sectionRef}>
    //   <h1>Hello stranger!</h1>
    //   {authenticated ? (
    //     <>
    //       <h2>Good to have you back</h2>
    //       <span>
    //         <Link to="/" onClick={deAuthenticate}>
    //           ← logout
    //         </Link>
    //         <span className="separator" />
    //         <Link to="/secret">show me something cool →</Link>
    //       </span>
    //     </>
    //   ) : (
    //     <Link to="/login">let me in →</Link>
    //   )}
    // </section>
  );
}

HomePage.propTypes = {
  search: PropTypes.string.isRequired,
};

export default HomePage;
