import React, { useState } from 'react';
import { LightsWrapper, AppItems, AppItemsCenteredBoxes, AppItemWrapper, AppItem } from './Lights.styles';

import LightsImageBlue from '../../../images/sense_icons/lights_blue.png';
import LightsImageRed from '../../../images/sense_icons/lights_red.png';
import LightsImagePurple from '../../../images/sense_icons/lights_purple.png';
import LightsImageGreen from '../../../images/sense_icons/lights_green.png';
import AppResalter from '../../../components/resalter/AppResalter';

export const BLUE = '#48c8cc';
export const RED = '#a21b2b';
export const PURPLE = '#af19a9';
export const GREEN = '#3fce59';

const Adjuster = () => {
  return <div>Light adjuster...</div>;
};

const Lights = () => {
  const [showResalter, setShowResalter] = useState(false);
  const [selectedLight, setSelectedLight] = useState(undefined);

  const handleLightClick = (color) => {
    if (color === BLUE) {
      setSelectedLight(LightsImageBlue);
    } else if (color === RED) {
      setSelectedLight(LightsImageRed);
    } else if (color === PURPLE) {
      setSelectedLight(LightsImagePurple);
    } else if (color === GREEN) {
      setSelectedLight(LightsImageGreen);
    }
    setShowResalter(true);
  };

  return (
    <>
      <LightsWrapper>
        <AppItemsCenteredBoxes>
          <AppItems>
            <AppItem>
              <AppItemWrapper onClick={() => handleLightClick(BLUE)}>
                <img src={LightsImageBlue} alt="ROBI > Lights" />
              </AppItemWrapper>
            </AppItem>
            <AppItem>
              <AppItemWrapper onClick={() => handleLightClick(RED)}>
                <img src={LightsImageRed} alt="ROBI > Lights" />
              </AppItemWrapper>
            </AppItem>
            <AppItem>
              <AppItemWrapper onClick={() => handleLightClick(PURPLE)}>
                <img src={LightsImagePurple} alt="ROBI > Lights" />
              </AppItemWrapper>
            </AppItem>
            <AppItem>
              <AppItemWrapper onClick={() => handleLightClick(GREEN)}>
                <img src={LightsImageGreen} alt="ROBI > Lights" />
              </AppItemWrapper>
            </AppItem>
          </AppItems>
        </AppItemsCenteredBoxes>
      </LightsWrapper>
      <AppResalter show={showResalter} onClose={() => setShowResalter(false)} topContent={selectedLight} bottomContent={<Adjuster />} />
    </>
  );
};

export default Lights;
