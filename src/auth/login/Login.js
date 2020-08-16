import React, { useEffect, useState } from 'react';
import { LoginWrapper, Header, LoginForm, Footer, LoginButton, FormLabelWrapper } from './Login.styles';
import { FormControl, FormHelperText, Input } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const history = useHistory();

  useEffect(() => {}, []);

  const makeLogin = async () => {
    setLoading(true);
    console.log(email, password);
    setTimeout(() => {
      setLoading(false);
      history.push('/app');
    }, 1000);
  };

  const onEmailChange = (target) => {
    setEmail(target.value);
  };

  const onPassswordChange = (target) => {
    setPassword(target.value);
  };

  return (
    <LoginWrapper>
      <Header>
        <span style={{ fontSize: '2.0rem', fontWeight: '600' }}>Inicio de sesión</span>
      </Header>
      <LoginForm>
        <FormControl isRequired>
          <FormLabelWrapper htmlFor="email">Correo electrónico</FormLabelWrapper>
          <Input type="email" id="email" aria-describedby="email-helper-text" onChange={(e) => onEmailChange(e.currentTarget)} />
          <FormHelperText id="email-helper-text">Nunca compartiremos tu correo.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabelWrapper htmlFor="password">Contraseña</FormLabelWrapper>
          <Input type="password" id="password" aria-describedby="password-helper-text" onChange={(e) => onPassswordChange(e.currentTarget)} />
        </FormControl>
        <LoginButton onClick={() => makeLogin()} isLoading={loading}>
          Iniciar sesión
        </LoginButton>
      </LoginForm>
      <Footer>
        <span>
          With love <span style={{ color: '#c20002' }}>&#9829;</span>{' '}
        </span>
      </Footer>
    </LoginWrapper>
  );
};

export default Login;
