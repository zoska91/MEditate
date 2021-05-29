import axios from 'axios';
import qs from 'qs';

export const sendRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const api = {
  getSingleMeditaion: id => sendRequest.get(`/getMeditationObject?id=${id}`),
  getMyMeditaions: () => sendRequest.get('/getMeditationObjectList'),

  createMeditation: body => {
    const params = qs.stringify(body, { arrayFormat: 'repeat' });
    return sendRequest.get(`/postMeditationObject?${params}`);
  },
};
