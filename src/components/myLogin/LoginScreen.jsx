import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useForm } from '../../hooks/useForm';
import loginApi from '../../helpers/login.api';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginWrapper = styled.div``;

const H1 = styled.h1`
  margin: 0 0 20px;
  line-height: 1;
  color: #44c4e7;
  // font-size: 18px;
  font-weight: 400;
`;
const H1Error = styled.h1`
  margin: 0 0 20px;
  line-height: 1;
  color: #ff0000;
  font-size: 18px;
  font-weight: 400;
`;
const Form = styled.form`
position: absolute;
top: 50%;
left: 50%;
background: #fff;
width: 285px;
margin: -140px 0 0 -182px;
padding: 40px;
box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

input {
  outline: none;
  display: block;
  width: 100%;
  margin: 0 0 20px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  color: #000;
  font-family: "Roboto";
  box-sizing: border-box;
  font-size: 14px;
  font-wieght: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: 0.2s linear;
  &input:focus {
    color: #333;
    border: 1px solid #44c4e7;
  }
}
button {
  margin: 4px 1px;
  cursor: pointer;
  background: #44c4e7;
  width: 100%;
  padding: 10px 15px;
  border: 0;
  border-radius: 10px;
  color: #fff;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  &:hover {
    background: #369cb8;
  }
}
}
`;

export const LoginScreen = ({ history }) => {
  const { authDispatch: dispatch } = useContext(AuthContext);

  const loginForm = { user: '', password: '' };

  const [formValues, handleInputChange, reset] = useForm(loginForm);

  const [showError, setShowError] = useState(false);

  const { user, password } = formValues;

  const handleReturn = () => {
    history.replace('/');
  };
  const handleLogin = (e) => {
    setShowError(false);
    e.preventDefault();
    loginApi(user, password)
      .then((res) => {
        dispatch({
          type: types.login,
          value: {
            id: res.id,
            name: res.name,
            avatarUrl: res.avatarUrl,
          },
        });
        history.replace('/');
      })
      .catch((error) => {
        // console.log('Error', error);
        setShowError(true);
      });
    reset();
  };

  return (
    <LoginWrapper id="login-wrapper">
      <Form id="login-form" autoComplete="off" onSubmit={handleLogin}>
        {showError && (
          <H1Error data-testid="error-message" id="title-error">Error: Please enter correct Username &amp; password.</H1Error>
        )}
        <H1 id="title-login">Login</H1>
        <input
          placeholder="Username"
          data-testid="login-username"
          type="text"
          id="username"
          name="user"
          value={user}
          onChange={handleInputChange}
        ></input>
        <input
          placeholder="Password"
          data-testid="login-password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        ></input>
        <button id="submit" data-testid="login-button" type="submit">
          Login
        </button>
        <button id="returnToMain" type="button" onClick={handleReturn}>
          Return to main
        </button>
      </Form>
    </LoginWrapper>
  );
};
