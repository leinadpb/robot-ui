import { executeRequestSync, useAPI } from './API';

const playBirdsOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/sound/birds/play',
    },
    updateStore: false,
  };
};

const playSeaOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/sound/sea/play',
    },
    updateStore: false,
  };
};

const playSeaAnimalsOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/sound/sea_animals/play',
    },
    updateStore: false,
  };
};

const playWindOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/sound/wind/play',
    },
    updateStore: false,
  };
};

const playRainOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/sound/rain/play',
    },
    updateStore: false,
  };
};

const playLeafsOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/sound/leafs/play',
    },
    updateStore: false,
  };
};

const turnOffOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/sound/stop',
    },
    updateStore: false,
  };
};

const adjustVolumenOptions = (amount) => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: `/v1/sound/volume/${amount}`,
    },
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
    adjustVolumen: (amount) => executeRequestSync(token, adjustVolumenOptions(amount)),
  };
};

export default useSoundAPI;
