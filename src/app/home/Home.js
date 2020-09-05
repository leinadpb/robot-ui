import React from 'react';
import { AppItems, AppItemsCenteredBoxes, AppItemWrapper, AppItem } from './Home.styles';
import SentidosImage from '../../images/home_icons/sentidos.png';
import ProgressImage from '../../images/home_icons/progress.png';
import TimerImage from '../../images/home_icons/timer.png';
import VideoImage from '../../images/home_icons/video.png';
import { useHistory } from 'react-router-dom';

const Home = ({ user, selectedPatient }) => {
  const history = useHistory();

  return (
    <AppItemsCenteredBoxes>
      <AppItems>
        <AppItem onClick={() => history.push('/app/senses')}>
          <AppItemWrapper>
            <img src={SentidosImage} alt="ROBI > Sentidos" />
          </AppItemWrapper>
        </AppItem>
        <AppItem>
          <AppItemWrapper>
            <img src={ProgressImage} alt="ROBI > Progress" />
          </AppItemWrapper>
        </AppItem>
        <AppItem>
          <AppItemWrapper>
            <img src={TimerImage} alt="ROBI > Timer" />
          </AppItemWrapper>
        </AppItem>
        <AppItem>
          <AppItemWrapper>
            <img src={VideoImage} alt="ROBI > Video" />
          </AppItemWrapper>
        </AppItem>
      </AppItems>
    </AppItemsCenteredBoxes>
  );
};

export default Home;
