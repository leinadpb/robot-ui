import React, { useEffect } from 'react';
import { Wrapper, Header, Actions, Action, ActionText } from './Auth.styles';
import { useHistory } from 'react-router-dom';
import LogoROBI from '../images/LOGO_ROBI.svg';

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
        <img src={LogoROBI} alt="Logo ROBI" />
      </Header>
      <Actions>
        <Action onClick={() => history.push('/auth/login')}>
          <span>Inicio de sesión</span>
        </Action>
        <Action>
          <span>Registrarse</span>
        </Action>
        <ActionText>
          <span>Olvidaste tu contraseña?</span>
        </ActionText>
      </Actions>
    </Wrapper>
  );
};

export default Auth;
