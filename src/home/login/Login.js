import React from 'react';
import { LoginWrapper, Header, LoginForm, Footer, LoginButton } from './Login.styles';
import { FormControl, FormLabel, FormHelperText, Input } from '@chakra-ui/core';

const Login = () => {
  return (
    <LoginWrapper>
      <Header>
        <span style={{ fontSize: '2.0rem', fontWeight: '600' }}>Inicio de sesión</span>
      </Header>
      <LoginForm>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Correo electrónico</FormLabel>
          <Input type="email" id="email" aria-describedby="email-helper-text" />
          <FormHelperText id="email-helper-text">Nunca compartiremos tu correo.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <Input type="password" id="password" aria-describedby="password-helper-text" />
        </FormControl>
        <LoginButton>Iniciar sesión</LoginButton>
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
