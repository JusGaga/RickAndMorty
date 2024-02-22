import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
export const getListOfCharacter = (page = 1) => {
  return axios.get(`${BASE_URL}/character?page=${page}`);
};
