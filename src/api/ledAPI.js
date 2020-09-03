import { executeRequestSync, useAPI } from './API';

const redOnOptions = () => {
  return {
    method: 'GET',
    url: '/v1/led/red/on',
    updateStore: false,
  };
};

const blueOnOptions = () => {
  return {
    method: 'GET',
    url: '/v1/led/blue/on',
    updateStore: false,
  };
};

const greenOnOptions = () => {
  return {
    method: 'GET',
    url: '/v1/led/green/on',
    updateStore: false,
  };
};

const purpleOnOptions = () => {
  return {
    method: 'GET',
    url: '/v1/led/purple/on',
    updateStore: false,
  };
};

const turnOffOptions = () => {
  return {
    method: 'GET',
    url: '/v1/led/off',
    updateStore: false,
  };
};

const useLedAPI = () => {
  const { token } = useAPI();
  return {
    redOn: () => executeRequestSync(token, redOnOptions()),
    blueOn: () => executeRequestSync(token, blueOnOptions()),
    greenOn: () => executeRequestSync(token, greenOnOptions()),
    purpleOn: () => executeRequestSync(token, purpleOnOptions()),
    turnOffLed: () => executeRequestSync(token, turnOffOptions()),
  };
};

export default useLedAPI;
