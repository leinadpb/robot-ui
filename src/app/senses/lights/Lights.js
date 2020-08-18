import React, { useState } from 'react';

import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/core';

import { LightsWrapper, AppItems, AppItemsCenteredBoxes, AppItemWrapper, AppItem } from './Lights.styles';

import LightsImageBlue from '../../../images/sense_icons/lights_blue.png';
import LightsImageRed from '../../../images/sense_icons/lights_red.png';
import LightsImagePurple from '../../../images/sense_icons/lights_purple.png';
import LightsImageGreen from '../../../images/sense_icons/lights_green.png';
import AppResalter from '../../../components/resalter/AppResalter';

export const BLUE = '#48c8cc';
export const RED = 'red.400';
export const PURPLE = '#af19a9';
export const GREEN = '#3fce59';

const Adjuster = ({ color }) => {
  console.log('color:::', color);
  return (
    <Slider defaultValue={33} color={color} step={33} size="lg" max={99} min={0}>
      <SliderTrack bg={color} style={{ height: '10px', borderRadius: '12%' }} />
      <SliderFilledTrack bg={color} style={{ height: '10px', borderRadius: '12%' }} />
      <SliderThumb size={6} />
    </Slider>
  );
};

const Lights = () => {
  const [showResalter, setShowResalter] = useState(false);
  const [selectedLight, setSelectedLight] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(undefined);

  const handleLightClick = (color) => {
    if (color === BLUE) {
      setSelectedLight(LightsImageBlue);
      setCurrentColor(BLUE);
    } else if (color === RED) {
      setSelectedLight(LightsImageRed);
      setCurrentColor(RED);
    } else if (color === PURPLE) {
      setSelectedLight(LightsImagePurple);
      setCurrentColor(PURPLE);
    } else if (color === GREEN) {
      setSelectedLight(LightsImageGreen);
      setCurrentColor(GREEN);
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
      <AppResalter show={showResalter} onClose={() => setShowResalter(false)} topContent={selectedLight} bottomContent={<Adjuster color={currentColor} />} />
    </>
  );
};

export default Lights;