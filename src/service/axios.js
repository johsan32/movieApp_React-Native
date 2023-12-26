import axios from 'axios';
import {apiKey, token} from '../utils/constans';

const baseURL = 'https://api.themoviedb.org/3';

export const axiosFetch = axios.create({
  baseURL,
  method: 'GET',
  params: {
    api_key: apiKey,
    language: 'tr-TR',
    accept: 'application/json',
  },
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export const options= {
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
};