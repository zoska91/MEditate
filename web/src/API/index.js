import axios from 'axios';

export const sendRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const api = {
  login: body => sendRequest.post('/auth/login', body),
};

/*
example using:

  const { data } = await api.login(loginData);
 console.log(data)

*/
