import { useState, useEffect } from 'react';
import  loginApi  from '../helpers/login.api';

export const useLogin = ({user, password}) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    loginApi({user, password}).then((res) => {
      setState({
        data: res,
        loading: false,
      });
    });
  }, [user,password]);

  return state;
};