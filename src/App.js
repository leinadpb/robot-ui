import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import Login from './auth/login/Login';
import About from './about/About';
import NotFound from './not_found/NotFound';
import AppTemplate from './app_template/AppTemplate';
import styled from 'styled-components';
import Auth from './auth/Auth';
import Home from './app/home/Home';
import { useCookies } from 'react-cookie';
import useAuthAPI from './api/authAPI';
import Senses from './app/senses/Senses';
import Lights from './app/senses/lights/Lights';
import Sounds from './app/senses/sounds/Sounds';
import Patients from './app/patients/Patients';

const InstallButton = styled.div`
  width: 300px;
  height: 40px;
  background-color: #0060ff;
  position: fixed;
  bottom: 12px;
  left: calc((100vw - 300px) / 2);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.15rem;
    color: white;
  }
  &:hover {
    cursor: pointer;
    background-color: #0081ff;
  }
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(undefined);
  const location = useLocation();
  const history = useHistory();
  const [cookies] = useCookies(['token']);
  const [loggedUser, setLoggedUser] = useState(undefined);
  const [selectedPatient, setSelectedPatient] = useState(undefined);

  const { info } = useAuthAPI();

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
    });

    if (location.pathname === '/') {
      history.push('/auth');
    }
    setLoading(false);
  }, [history, location.pathname]);

  useEffect(() => {
    const getUserInfo = async () => {
      let rs = await info(cookies.token);
      if (rs.success) {
        let userInfo = {
          ...rs.data,
        };
        console.log(userInfo);
        setLoggedUser(userInfo);
        history.push('/app');
      } else {
        history.push('/auth');
      }
    };

    // Trigger on each browser refresh
    console.log(cookies);
    if (!!cookies.token) {
      // Get user info
      getUserInfo(cookies.token);
    } else {
      // Show Auth
      history.push('/auth');
    }
    // eslint-disable-next-line
  }, []);

  const installApp = () => {
    if (!!deferredPrompt) {
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(undefined);
      });
    }
  };

  const updateLoggedUser = (user) => {
    setLoggedUser(user);
  };

  const onSelectedPatient = (patient) => {
    setSelectedPatient(patient);
    history.push('/app/home');
  };

  if (loading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <AppTemplate user={loggedUser} selectedPatient={selectedPatient}>
      <Switch>
        <Route path="/auth" render={() => <Auth user={loggedUser} />} exact />
        <Route path="/auth/login" render={() => <Login user={loggedUser} setLoggedUser={(user) => updateLoggedUser(user)} />} exact />
        <Route path="/about" render={() => <About user={loggedUser} />} exact />

        <Route path="/app" render={() => <Patients handleSelectedPatient={onSelectedPatient} user={loggedUser} />} exact />
        <Route path="/app/home" render={() => <Home user={loggedUser} selectedPatient={selectedPatient} />} exact />
        <Route path="/app/senses" render={() => <Senses user={loggedUser} />} exact />
        <Route path="/app/senses/lights" render={() => <Lights user={loggedUser} />} exact />
        <Route path="/app/senses/sounds" render={() => <Sounds user={loggedUser} />} exact />

        <Route path="/" render={() => <Auth user={loggedUser} />} />
        <Route render={() => <NotFound user={loggedUser} />} />
      </Switch>
      {!!deferredPrompt && (
        <InstallButton onClick={installApp}>
          <span>Instalar en mi dispositivo</span>
        </InstallButton>
      )}
    </AppTemplate>
  );
}

export default App;
