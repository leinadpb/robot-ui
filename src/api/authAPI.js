import { executeRequestSync, useAPI } from './API';

const loginOptions = (data) => {
  return {
    method: 'POST',
    url: '/v1/auth/login',
    data: { ...data },
    updateStore: false,
  };
};

const infoOptions = () => {
  return {
    method: 'GET',
    url: '/v1/auth/info',
    updateStore: false,
  };
};

const addUserOptions = (data) => {
  return {
    method: 'POST',
    url: '/v1/auth/create',
    data: data,
    updateStore: false,
  };
};

const useAuthAPI = () => {
  const { token, dispatch } = useAPI();
  return {
    login: (data) => executeRequestSync(undefined, loginOptions(data)),
    info: (authToken = token) => executeRequestSync(authToken, infoOptions()),
    addUser: (dto) => executeRequestSync(token, addUserOptions(dto), dispatch),
  };
};

export default useAuthAPI;
