import React, { useEffect } from 'react';
import { Wrapper, Header, Actions, Action, ActionText } from './Auth.styles';
import { useHistory } from 'react-router-dom';

const Auth = ({ user }) => {
  const history = useHistory();

  useEffect(() => {
    if (!!user && !!user.id) {
      history.push('/app');
    }
    // eslint-disable-next-line
  }, [user]);

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
