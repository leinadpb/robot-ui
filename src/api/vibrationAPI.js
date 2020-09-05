import { executeRequestSync, useAPI } from './API';

const turnOnOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: `/v1/vibration/on`,
    },
    updateStore: false,
  };
};

const turnOffOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: `/v1/vibration/off`,
    },
    updateStore: false,
  };
};

const useVibrationAPI = () => {
  const { token } = useAPI();
  return {
    turnOnVibration: () => executeRequestSync(token, turnOnOptions()),
    turnOffVibration: () => executeRequestSync(token, turnOffOptions()),
  };
};

export default useVibrationAPI;
