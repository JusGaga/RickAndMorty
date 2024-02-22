import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
export const getListOfCharacter = () => {
  return axios.get(`${BASE_URL}/character`);
};
