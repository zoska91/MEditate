import axios from 'axios';
import qs from 'qs';

const baseURL = 'http://meditate.us-e2.cloudhub.io/api';

export const sendRequest = axios.create({
  baseURL,
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
