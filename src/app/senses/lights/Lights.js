import React from 'react';
import { LightsWrapper, AppItems, AppItemsCenteredBoxes, AppItemWrapper, AppItem } from './Lights.styles';

import LightsImageBlue from '../../../images/sense_icons/lights_blue.png';
import LightsImageRed from '../../../images/sense_icons/lights_red.png';
import LightsImagePurple from '../../../images/sense_icons/lights_purple.png';
import LightsImageGreen from '../../../images/sense_icons/lights_green.png';

export const BLUE = '#48c8cc';
export const RED = '#a21b2b';
export const PURPLE = '#af19a9';
export const GREEN = '#3fce59';

const Lights = () => {
  return (
    <LightsWrapper>
      <AppItemsCenteredBoxes>
        <AppItems>
          <AppItem>
            <AppItemWrapper color={BLUE}>
              <img src={LightsImageBlue} alt="ROBI > Lights" />
            </AppItemWrapper>
          </AppItem>
          <AppItem>
            <AppItemWrapper color={RED}>
              <img src={LightsImageRed} alt="ROBI > Lights" />
            </AppItemWrapper>
          </AppItem>
          <AppItem>
            <AppItemWrapper color={PURPLE}>
              <img src={LightsImagePurple} alt="ROBI > Lights" />
            </AppItemWrapper>
          </AppItem>
          <AppItem>
            <AppItemWrapper color={GREEN}>
              <img src={LightsImageGreen} alt="ROBI > Lights" />
            </AppItemWrapper>
          </AppItem>
        </AppItems>
      </AppItemsCenteredBoxes>
    </LightsWrapper>
  );
};

export default Lights;
