import React from 'react';
import { SensesWrapper, AppItem, AppItemWrapper, AppItemsCenteredBoxes, AppItems } from './Senses.styles';

import LightsImage from '../../images/sense_icons/ligths.png';
import TextureImage from '../../images/sense_icons/texture.png';
import SoundImage from '../../images/sense_icons/sound.png';
import VibrationImage from '../../images/sense_icons/vibration.png';
import { useHistory } from 'react-router-dom';

const Senses = () => {
  const history = useHistory();
  return (
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
          <AppItem>
            <AppItemWrapper>
              <img src={SoundImage} alt="ROBI > Sound" />
            </AppItemWrapper>
          </AppItem>
          <AppItem>
            <AppItemWrapper>
              <img src={VibrationImage} alt="ROBI > Vibration" />
            </AppItemWrapper>
          </AppItem>
        </AppItems>
      </AppItemsCenteredBoxes>
    </SensesWrapper>
  );
};

export default Senses;
