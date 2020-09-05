import React, { useState } from 'react';
import { SensesWrapper, AppItem, AppItemWrapper, AppItemsCenteredBoxes, AppItems, TurnOffOnWrapper, TurnOn, TurnOff } from './Senses.styles';

import LightsImage from '../../images/sense_icons/ligths.png';
import TextureImage from '../../images/sense_icons/texture.png';
import SoundImage from '../../images/sense_icons/sound.png';
import VibrationImage from '../../images/sense_icons/vibration.png';
import { useHistory } from 'react-router-dom';
import AppResalter from '../../components/resalter/AppResalter';
import useVibrationAPI from '../../api/vibrationAPI';

import VirationImage from '../../images/sense_icons/vibration.png';

const TurnOffOn = ({ onTurnOff, onTurnOn, loading }) => {
  const handleOn = () => {
    if (!loading) {
      onTurnOn();
    }
  };

  const handleOff = () => {
    if (!loading) {
      onTurnOff();
    }
  };

  return (
    <TurnOffOnWrapper>
      <TurnOn onClick={() => handleOn()}>
        <span>Encender</span>
      </TurnOn>
      <TurnOff onClick={() => handleOff()}>
        <span>Apagar</span>
      </TurnOff>
    </TurnOffOnWrapper>
  );
};

const Senses = () => {
  const [loading, setLoading] = useState(false);
  const [showVibration, setShowVibration] = useState(false);

  const history = useHistory();

  // APIs
  const { turnOffVibration, turnOnVibration } = useVibrationAPI();

  const onTurnOnVibration = async () => {
    setLoading(true);
    let rs = await turnOnVibration();
    if (rs.success) {
      setShowVibration(false);
    }
    setLoading(false);
  };

  const onTurnOffVibration = async () => {
    setLoading(true);
    let rs = await turnOffVibration();
    if (rs.success) {
      setShowVibration(false);
    }
    setLoading(false);
  };

  return (
    <>
      <SensesWrapper>
        {' '}
        <AppItemsCenteredBoxes>
          <AppItems>
            <AppItem onClick={() => history.push('/app/senses/lights')}>
              <AppItemWrapper>
                <img src={LightsImage} alt="ROBI > Lights" />
              </AppItemWrapper>
            </AppItem>
            <AppItem>
              <AppItemWrapper>
                <img src={TextureImage} alt="ROBI > Texture" />
              </AppItemWrapper>
            </AppItem>
            <AppItem onClick={() => history.push('/app/senses/sounds')}>
              <AppItemWrapper>
                <img src={SoundImage} alt="ROBI > Sound" />
              </AppItemWrapper>
            </AppItem>
            <AppItem onClick={() => setShowVibration(true)}>
              <AppItemWrapper>
                <img src={VibrationImage} alt="ROBI > Vibration" height="80%" />
              </AppItemWrapper>
            </AppItem>
          </AppItems>
        </AppItemsCenteredBoxes>
      </SensesWrapper>
      <AppResalter
        show={showVibration}
        onClose={() => setShowVibration(false)}
        topContent={VirationImage}
        vibration={true}
        bottomContent={<TurnOffOn onTurnOn={onTurnOnVibration} onTurnOff={onTurnOffVibration} loading={loading} />}
      />
    </>
  );
};

export default Senses;
