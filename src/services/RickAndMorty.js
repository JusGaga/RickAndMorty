import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
export const getListOfCharacter = (
  name,
  status,
  species,
  type,
  gender,
  page = 1
) => {
  return axios.get(`${BASE_URL}/character`, {
    params: { name, status, species, type, gender, page }
  });
};
