import React, { useState } from 'react';
import { LoginWrapper, Header, LoginForm, Footer, LoginButton, FormLabelWrapper } from './Login.styles';
import { FormControl, FormHelperText, Input } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';
import useAuthAPI from '../../api/authAPI';
import { useCookies } from 'react-cookie';

const Login = ({ setLoggedUser }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const history = useHistory();

  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(['token']);

  const { login } = useAuthAPI();

  const makeLogin = async () => {
    setLoading(true);
    let rs = await login({
      username: username,
      password: password,
    });
    if (rs.success) {
      if (!!setLoggedUser) {
        setLoggedUser(rs.data);
      }
      setCookie('token', 'Bearer ' + rs.data.accessToken, { path: '/' });
      history.push('/app');
      setLoading(false);
    } else {
      setTimeout(async () => {
        rs = await login({
          username: username,
          password: password,
        });
        if (rs.success) {
          if (!!setLoggedUser) {
            setLoggedUser(rs.data);
          }
          setCookie('token', 'Bearer ' + rs.data.accessToken, { path: '/' });
          history.push('/app');
        }
        setLoading(false);
      }, 5000);
    }
  };

  const onEmailChange = (target) => {
    setUsername(target.value);
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
          <FormLabelWrapper htmlFor="email">Usuario</FormLabelWrapper>
          <Input type="text" id="email" aria-describedby="email-helper-text" onChange={(e) => onEmailChange(e.currentTarget)} />
          <FormHelperText id="email-helper-text">Nunca compartiremos tus datos personales.</FormHelperText>
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
