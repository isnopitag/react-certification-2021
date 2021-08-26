import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ReactComponent as AccountCircle } from '../../../assets/account-circle.svg';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

const Account = styled.div`
  fill: ${(props) => props.theme.backgroundColor};
  border: none;
  border-radius: 5px;
  display: grid;
  height: 50px;
  grid-template-columns: 80px 80px 120px 120px;
  margin: 5px;
`;
const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Button = styled.button`
  margin: 4px 2px;
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.color || '#fff'};
  border: none;
  border-radius: 10px;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: RoyalBlue;
  }
`;
const NameText = styled.h6`
  color: ${(props) => props.theme.textColor};
`;

export const UserControl = () => {
  const { name, avatarUrl, logged, authDispatch: dispatch } = useContext(AuthContext);

  const history = useHistory();

  const redirectLogin = () => {
    history.replace('/login');
  };
  const redirectFavorites = () => {
    history.replace('/favorites');
  };
  const handleLogout = () => {
    history.replace('/');
    dispatch({
      type: types.logout,
    });
  };

  return (
    <>
      <Account id="AccountComponent">
        {logged && <NameText id="name-title">Hi, {name}</NameText>}
        {!logged && <AccountCircle id="acount" width="50px" height="50px" stroke="white" />}
        {logged && <Avatar id="avatar-logged" src={avatarUrl} alt={name} />}
        {logged && <Button id="button-userControl" onClick={redirectFavorites} color="#04aa6d">Favorites</Button>}
        {logged ? (
          <Button id="button-userControl" onClick={handleLogout} color="#1c5476">Logout</Button>
        ) : (
          <Button id="button-userControl" onClick={redirectLogin} color="#1c5476">Login</Button>
        )}
      </Account>
    </>
  );
};
