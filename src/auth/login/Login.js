import React, { useEffect, useState } from 'react';
import { LoginWrapper, Header, LoginForm, Footer, LoginButton } from './Login.styles';
import { FormControl, FormLabel, FormHelperText, Input } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {}, []);

  const makeLogin = async () => {
    setLoading(true);
    console.log(email, password);
    setTimeout(() => {
      setLoading(false);
      history.push('/app/home');
    }, 1000);
  };

  return (
    <LoginWrapper>
      <Header>
        <span style={{ fontSize: '2.0rem', fontWeight: '600' }}>Inicio de sesión</span>
      </Header>
      <LoginForm>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Correo electrónico</FormLabel>
          <Input type="email" id="email" aria-describedby="email-helper-text" onChange={(e) => setEmail(e.target.value)} value={email} />
          <FormHelperText id="email-helper-text">Nunca compartiremos tu correo.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <Input type="password" id="password" aria-describedby="password-helper-text" onChange={(e) => setPassword(e.target.value)} value={password} />
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
