import { executeRequestSync, useAPI } from './API';

const redOnOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/led/red/on',
    },
    updateStore: false,
  };
};

const blueOnOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/led/blue/on',
    },
    updateStore: false,
  };
};

const greenOnOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/led/green/on',
    },
    updateStore: false,
  };
};

const purpleOnOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/led/purple/on',
    },
    updateStore: false,
  };
};

const turnOffOptions = () => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: '/v1/led/off',
    },
    updateStore: false,
  };
};

const adjustRedOptions = (amount) => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: `/v1/led/red/adjust/${amount}`,
    },
    updateStore: false,
  };
};

const adjustBlueOptions = (amount) => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: `/v1/led/blue/adjust/${amount}`,
    },
    updateStore: false,
  };
};

const adjustPurpleOptions = (amount) => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: `/v1/led/purple/adjust/${amount}`,
    },
    updateStore: false,
  };
};

const adjustGreenOptions = (amount) => {
  return {
    method: 'POST',
    url: '/v1/robi',
    data: {
      robotPath: `/v1/led/green/adjust/${amount}`,
    },
    updateStore: false,
  };
};

const useLedAPI = () => {
  const { token } = useAPI();
  return {
    redOn: () => executeRequestSync(token, redOnOptions()),
    adjustRed: (amount) => executeRequestSync(token, adjustRedOptions(amount)),
    blueOn: () => executeRequestSync(token, blueOnOptions()),
    adjustBlue: (amount) => executeRequestSync(token, adjustBlueOptions(amount)),
    greenOn: () => executeRequestSync(token, greenOnOptions()),
    adjustGreen: (amount) => executeRequestSync(token, adjustGreenOptions(amount)),
    purpleOn: () => executeRequestSync(token, purpleOnOptions()),
    adjustPurple: (amount) => executeRequestSync(token, adjustPurpleOptions(amount)),
    turnOffLed: () => executeRequestSync(token, turnOffOptions()),
  };
};

export default useLedAPI;
