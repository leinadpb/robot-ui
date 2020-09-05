import React, { useState } from 'react';

import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/core';

import { LightsWrapper, AppItems, AppItemsCenteredBoxes, AppItemWrapper, AppItem } from './Lights.styles';

import LightsImageBlue from '../../../images/sense_icons/lights_blue.png';
import LightsImageRed from '../../../images/sense_icons/lights_red.png';
import LightsImagePurple from '../../../images/sense_icons/lights_purple.png';
import LightsImageGreen from '../../../images/sense_icons/lights_green.png';
import AppResalter from '../../../components/resalter/AppResalter';
import useLedAPI from '../../../api/ledAPI';

import * as _ from 'underscore';

export const BLUE = '#48c8cc';
export const RED = 'red.400';
export const PURPLE = '#af19a9';
export const GREEN = '#3fce59';

const allowedValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const Adjuster = ({ color }) => {
  const { adjustBlue, adjustGreen, adjustPurple, adjustRed, turnOffLed } = useLedAPI();
  const [value, setValue] = useState(0);

  const adjustColor = async (amount) => {
    if (allowedValues.includes(amount) && amount !== value) {
      setValue(amount);
      console.log(amount);
      console.log('color:::', color);
      if (color === RED) {
        await adjustRed(amount);
      } else if (color === BLUE) {
        await adjustBlue(amount);
      } else if (color === GREEN) {
        await adjustGreen(amount);
      } else if (color === PURPLE) {
        await adjustPurple(amount);
      }
      if (amount === 0) {
        await turnOffLed();
      }
    }
  };

  const handleInputThrottled = _.throttle(adjustColor, 300);

  return (
    <Slider defaultValue={100} value={value} color={color} step={10} size="lg" max={100} min={0} onChange={(num) => handleInputThrottled(num)}>
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

  // APIs
  const { redOn, purpleOn, greenOn, blueOn } = useLedAPI();

  const handleLightClick = (color) => {
    if (color === BLUE) {
      blueOn();
      setSelectedLight(LightsImageBlue);
      setCurrentColor(BLUE);
    } else if (color === RED) {
      redOn();
      setSelectedLight(LightsImageRed);
      setCurrentColor(RED);
    } else if (color === PURPLE) {
      purpleOn();
      setSelectedLight(LightsImagePurple);
      setCurrentColor(PURPLE);
    } else if (color === GREEN) {
      greenOn();
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
