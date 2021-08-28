// import React, { useRef } from 'react';
import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { YoutubeGrid } from '../../components/videos/YoutubeGrid';
// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  // const history = useHistory();
  // const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return <YoutubeGrid />;
}

export default HomePage;
