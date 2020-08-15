import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import './App.css';
import Login from './home/login/Login';
import About from './about/About';
import NotFound from './not_found/NotFound';
import AppTemplate from './app_template/AppTemplate';
import styled from 'styled-components';
import Home from './home/Home';

const InstallButton = styled.div`
  width: 60vw;
  height: 180px;
  background-color: rgba(0, 0, 0, 0.8);
  span {
    font-size: 1.15rem;
    color: white;
  }
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
  }
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(undefined);
  const location = useLocation();
  const history = useHistory();

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

  if (loading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <AppTemplate>
      <Switch>
        <Route path="/auth" component={Home} exact />
        <Route path="/auth/login" component={Login} exact />
        <Route path="/about" component={About} exact />
        <Route component={NotFound} />
      </Switch>
      <InstallButton onClick={installApp}>
        <span>Instalar en mi dispositivo</span>
      </InstallButton>
    </AppTemplate>
  );
}

export default App;
