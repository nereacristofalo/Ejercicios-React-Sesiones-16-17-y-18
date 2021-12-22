import React from 'react';
import Registerformik from '../components/registerFormik';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const history = useHistory();

  const login = () => {
    history.push('/login');
  };

  return (
    <div>
      <h1>Register Page</h1>
      <Registerformik></Registerformik>
      <Button onClick={login}>Login</Button>
    </div>
  );
};

export default RegisterPage;
