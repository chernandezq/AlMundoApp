import axios from 'axios';
import {BASE_URL} from './constants';

export const getListHotels = async () => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/api/hotels`,
  })
    .then(response => response.data)
    .catch(error => error);
};

export const getHotelDetails = async id => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/api/hotels/${id}`,
  }).then(response => response.data);
};
