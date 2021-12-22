import React from 'react';
import Loginformik from '../components/Loginformik';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const Loginpage = () => {
  const history = useHistory();

  const register = () => {
    history.push('/register');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Loginformik></Loginformik>
      <Button onClick={register}>Register</Button>
    </div>
  );
};

export default Loginpage;
