import React from 'react';
import { Wrapper, Header, Actions, Action, ActionText } from './Auth.styles';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Header>
        <span style={{ fontSize: '2.5rem', fontWeight: '600' }}>ROBI</span>
      </Header>
      <Actions>
        <Action onClick={() => history.push('/auth/login')}>
          <span>Inicio de sesión</span>
        </Action>
        <Action>
          <span>Registrarse</span>
        </Action>
        <ActionText>
          <span>Olvidaste tu contrasena?</span>
        </ActionText>
      </Actions>
    </Wrapper>
  );
};

export default Auth;
