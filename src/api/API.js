import CONFIG from '../config';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const BASE_API = CONFIG.apiGateway.URL;

const buildAxiosHeaders = (token) => {
  return {
    Authorization: token,
    'Content-type': 'application/json',
  };
};

const buildAxiosHeadersPublic = () => {
  return {
    'Content-type': 'application/json',
  };
};

/**
 * Creates an axios instance to be use across all API method calls
 * @param {*} token (optional, if none, an axios instance without Authorization header will be created)
 * @param {*} baseApi (optional)
 */
export const buildAxios = (token, method, url, baseApi = BASE_API) => {
  let instance;
  if (!!token) {
    instance = axios.create({
      baseURL: baseApi,
      timeout: 4000, // Openshift resources sometimes are slow due to low resources available
      headers: buildAxiosHeaders(token),
    });
  } else {
    // No token specified, send request wihtout Authorization header
    instance = axios.create({
      baseURL: baseApi,
      timeout: 4000, // Openshift resources sometimes are slow due to low resources available
      header: buildAxiosHeadersPublic(),
    });
  }

  // 403 notification intereptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error.response.status === 403) {
        console.log('Tu sesion ha expirado. Favor vuelve a iniciar sesion.');
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

/**
 * Executes a request synchronous
 * @param {*} instance
 * @param {*} options
 * @param {*} dispatch
 */
export const executeRequestSync = async (token, options, dispatch = undefined) => {
  let rs;
  let success = false;
  try {
    let instance = buildAxios(token, options.method, options.url);
    rs = await instance(options);
    success = true;
  } catch (e) {
    rs = e.response;
    console.log('error in API.js');
    console.log(rs, e);
  } finally {
    if (dispatch && success && options.updateStore) {
      // if a options.updateStore is TRUE, then execute the dispatch function
      dispatch({
        type: options.storeType,
        payload: !Array.isArray(rs.data)
          ? isNaN(rs.data)
            ? { data: { ...rs.data }, success, entity: options.storeEntity }
            : { data: rs.data, success, entity: options.storeEntity }
          : { data: [...rs.data], success, entity: options.storeEntity },
      });
    }
    return {
      success,
      data: !!rs ? (Array.isArray(rs.data) ? [...rs.data] : success ? (isNaN(rs.data) ? { ...rs.data } : rs.data) : { ...rs }) : undefined,
      headers: !!rs ? rs.headers : undefined,
    };
  }
};

/**
 * Common Hook to be called from other API Hooks
 */
export const useAPI = (authToken = undefined) => {
  const [cookies] = useCookies(['token']);
  let token = cookies.token;

  return {
    token: !!authToken ? authToken : token,
  };
};
