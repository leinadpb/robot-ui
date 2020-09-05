import React, { useState } from 'react';

import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/core';

import { SoundsWrapper, AppItems, AppItemsCenteredBoxes, AppItemWrapper, AppItem } from './Sounds.styles';

import RainImage from '../../../images/sense_icons/rain.png';
import SeaImage from '../../../images/sense_icons/sea.png';
import WindImage from '../../../images/sense_icons/wind.png';
import LeafsImage from '../../../images/sense_icons/leafs.png';
import BirdsImage from '../../../images/sense_icons/birds.png';
import SeaAnimalsImage from '../../../images/sense_icons/sea_animals.png';

import AppResalter from '../../../components/resalter/AppResalter';

import useSoundAPI from '../../../api/soundAPI';

import * as _ from 'underscore';

export const RAIN = 'RAIN';
export const SEA = 'SEA';
export const BIRDS = 'BIRDS';
export const LEAFS = 'LEAFS';
export const WIND = 'WIND';
export const SEA_ANIMALS = 'SEA_ANIMALS';

const allowedValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const Adjuster = ({ sound }) => {
  const [value, setValue] = useState(0);

  // APIs
  const { adjustVolumen, turnOffSound } = useSoundAPI();

  const onVolumenChange = async (change) => {
    if (allowedValues.includes(change)) {
      setValue(change);
      console.log(sound);
      console.log('volumen:::', change);

      await adjustVolumen(change);

      if (change === 0) {
        await turnOffSound();
      }
    }
  };

  const handleInputThrottled = _.throttle(onVolumenChange, 500);

  return (
    <Slider value={value} defaultValue={0} step={10} size="lg" max={100} min={0} onChange={handleInputThrottled}>
      <SliderTrack style={{ height: '10px', borderRadius: '12%' }} />
      <SliderFilledTrack style={{ height: '10px', borderRadius: '12%' }} />
      <SliderThumb size={6} />
    </Slider>
  );
};

const Sounds = () => {
  const [showResalter, setShowResalter] = useState(false);
  const [selectedSound, setSelectedSound] = useState(undefined);
  const [currentSound, setCurrentSound] = useState(undefined);

  const { playBirds, playSea, playLeafs, playRain, playSeaAnimals, playWind } = useSoundAPI();

  const handleSoundClick = (sound) => {
    if (sound === RAIN) {
      playRain();
      setSelectedSound(RainImage);
      setCurrentSound(RAIN);
    } else if (sound === SEA) {
      playSea();
      setSelectedSound(SeaImage);
      setCurrentSound(RAIN);
    } else if (sound === BIRDS) {
      playBirds();
      setSelectedSound(BirdsImage);
      setCurrentSound(RAIN);
    } else if (sound === LEAFS) {
      playLeafs();
      setSelectedSound(LeafsImage);
      setCurrentSound(RAIN);
    } else if (sound === WIND) {
      playWind();
      setSelectedSound(WindImage);
      setCurrentSound(RAIN);
    } else if (sound === SEA_ANIMALS) {
      playSeaAnimals();
      setSelectedSound(SeaAnimalsImage);
      setCurrentSound(RAIN);
    }
    setShowResalter(true);
  };

  return (
    <>
      <SoundsWrapper>
        <AppItemsCenteredBoxes>
          <AppItems>
            <AppItem>
              <AppItemWrapper onClick={() => handleSoundClick(RAIN)}>
                <img src={RainImage} alt="ROBI > Sounds" />
              </AppItemWrapper>
            </AppItem>
            <AppItem>
              <AppItemWrapper onClick={() => handleSoundClick(SEA)}>
                <img src={SeaImage} alt="ROBI > Sounds" />
              </AppItemWrapper>
            </AppItem>
            <AppItem>
              <AppItemWrapper onClick={() => handleSoundClick(BIRDS)}>
                <img src={BirdsImage} alt="ROBI > Sounds" />
              </AppItemWrapper>
            </AppItem>
            <AppItem>
              <AppItemWrapper onClick={() => handleSoundClick(LEAFS)}>
                <img src={LeafsImage} alt="ROBI > Sounds" />
              </AppItemWrapper>
            </AppItem>
            <AppItem>
              <AppItemWrapper onClick={() => handleSoundClick(WIND)}>
                <img src={WindImage} alt="ROBI > Sounds" />
              </AppItemWrapper>
            </AppItem>
            <AppItem>
              <AppItemWrapper onClick={() => handleSoundClick(SEA_ANIMALS)}>
                <img src={SeaAnimalsImage} alt="ROBI > Sounds" />
              </AppItemWrapper>
            </AppItem>
          </AppItems>
        </AppItemsCenteredBoxes>
      </SoundsWrapper>
      <AppResalter sound={true} show={showResalter} onClose={() => setShowResalter(false)} topContent={selectedSound} bottomContent={<Adjuster sound={currentSound} />} />
    </>
  );
};

export default Sounds;
