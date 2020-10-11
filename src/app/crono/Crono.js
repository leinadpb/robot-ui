import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TimerImage from '../../images/home_icons/timer.png';
import { AppItemWrapper } from '../home/Home.styles';

export const CronoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: auto;
`;

export const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 40%;
  }
  span {
    color: white;
    font-weight: 600;
    font-size: 1.15rem;
    margin-top: 8px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 3rem;
    color: white;
  }
`;

export const Action = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    transition: all 0.2s ease;
  }
  span:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
  }
`;

const Crono = ({ hour, minute, second, timer, state, setHour, setMinute, setSecond, setTimer, setState }) => {
  //   const [hour, setHour] = useState(0);
  //   const [minute, setMinute] = useState(0);
  //   const [second, setSecond] = useState(0);

  //   const [state, setState] = useState('stop');

  //   const [timer, setTimer] = useState();

  const formatTime = (time) => {
    if (time.toString().length <= 1) {
      return `0${time}`;
    } else {
      return time;
    }
  };
  const startTimer = () => {
    if (!timer) {
      let timerRef = setInterval(() => {
        setSecond((prev) => {
          return prev + 1;
        });
      }, 999);
      setState('running');
      setTimer(timerRef);
    }
  };

  //   useEffect(() => {
  //     if (state === 'running') {
  //       let h = hour;
  //       let m = minute;
  //       let s = second;
  //       if (s >= 60) {
  //         setSecond(0);
  //         m++;
  //       }
  //       if (m >= 60) {
  //         m = 0;
  //         h++;
  //       }
  //       if (h >= 24) {
  //         // do nothing
  //       } else {
  //         setMinute(m);
  //         setHour(h);
  //         console.log(h, m, s);
  //       }
  //     }
  //   }, [second]);

  const stopTimer = () => {
    if (!!timer) {
      clearInterval(timer);
      setState('stop');
      setTimer(undefined);
    }
  };

  const cleanTimer = () => {
    setState('stop');
    setMinute(0);
    setSecond(0);
    setHour(0);
    setTimer(undefined);
  };

  const continueTimer = () => {
    startTimer();
  };

  return (
    <CronoWrapper>
      <Title>
        <AppItemWrapper width="40%">
          <img src={TimerImage} alt="ROBI > Timer" />
        </AppItemWrapper>
        <span>Cronómetro</span>
      </Title>
      <Content>
        <span>{`${formatTime(hour)} : ${formatTime(minute)} : ${formatTime(second)}`}</span>
      </Content>
      <Action>
        {state === 'stop' && (second > 0 || minute > 0 || hour > 0) && (
          <>
            <span onClick={() => continueTimer()}>CONTINUAR</span> <span style={{ margin: '12px' }}>/</span>v<span onClick={() => cleanTimer()}>LIMPIAR</span>
          </>
        )}
        {state === 'running' && <span onClick={() => stopTimer()}>DETENER</span>}
        {state === 'stop' && second === 0 && minute === 0 && hour === 0 && <span onClick={() => startTimer()}>INICIAR</span>}
      </Action>
    </CronoWrapper>
  );
};

export default Crono;
