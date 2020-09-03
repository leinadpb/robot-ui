import { executeRequestSync, useAPI } from './API';

const playBirdsOptions = () => {
  return {
    method: 'GET',
    url: '/v1/sound/birds/play',
    updateStore: false,
  };
};

const playSeaOptions = () => {
  return {
    method: 'GET',
    url: '/v1/sound/sea/play',
    updateStore: false,
  };
};

const playSeaAnimalsOptions = () => {
  return {
    method: 'GET',
    url: '/v1/sound/sea_animals/play',
    updateStore: false,
  };
};

const playWindOptions = () => {
  return {
    method: 'GET',
    url: '/v1/sound/wind/play',
    updateStore: false,
  };
};

const playRainOptions = () => {
  return {
    method: 'GET',
    url: '/v1/sound/rain/play',
    updateStore: false,
  };
};

const playLeafsOptions = () => {
  return {
    method: 'GET',
    url: '/v1/sound/leafs/play',
    updateStore: false,
  };
};

const turnOffOptions = () => {
  return {
    method: 'GET',
    url: '/v1/sound/off',
    updateStore: false,
  };
};

const useSoundAPI = () => {
  const { token } = useAPI();
  return {
    playBirds: () => executeRequestSync(token, playBirdsOptions()),
    playSea: () => executeRequestSync(token, playSeaOptions()),
    playSeaAnimals: () => executeRequestSync(token, playSeaAnimalsOptions()),
    playWind: () => executeRequestSync(token, playWindOptions()),
    playRain: () => executeRequestSync(token, playRainOptions()),
    playLeafs: () => executeRequestSync(token, playLeafsOptions()),
    turnOffSound: () => executeRequestSync(token, turnOffOptions()),
  };
};

export default useSoundAPI;
