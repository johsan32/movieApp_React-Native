import {axiosFetch} from './axios';

const responseData = response => response.data;

export const requests = {
  get: (url, params = {}) => axiosFetch.get(url, {params}).then(responseData),
  post: (url, data = {}) => axiosFetch.post(url, data).then(responseData),
};
